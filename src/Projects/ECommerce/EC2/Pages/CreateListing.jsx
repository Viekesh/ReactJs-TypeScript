import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import EC2Header from "../Components/EC2Header";
import Spinner from "../Components/Spinner";
import "../Styles/CreateListing.scss";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../../../firebaseConfig";



const CreateListing = () => {



  const auth = getAuth();

  // this hook is for geolocation for adding the address (latitude and logitude)
  // const [geolocationEnable, setGeolocationEnable] = useState(true);

  const [loading, setLoading] = useState(false);

  // this hook is created for form data
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    mileage: "",
    price: "",
    electric: false,
    petrol: false,
    diesel: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
    // latitude: -90,
    // longitude: -180,
    images: {}
  });

  // destructure the initial values (formData information) which we have defined in the above "useState" (formData) hook otherwise
  // we will get error
  const {
    type,
    name,
    mileage,
    price,
    electric,
    petrol,
    diesel,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
    // latitude,
    // longitude,
    images,
  } = formData;

  const afterClickOnCreateListInput = (event) => {
    // in this form we have some condition because we have true or false, we have number and files also
    // and also text from the name and the address input

    // based on the input we are going to change this boolean true or false and use that boolean to change the state in the form data
    let boolean = null;

    // if the "event" (input or event.target.value) equal to "true" then we want this boolean equal to "true"
    if (event.target.value === "true") {
      boolean = true;
    }

    if (event.target.value === "false") {
      boolean = false;
    }

    // if input is files, so in this case "setFormData"
    if (event.target.files) {
      // this is for files
      // first here we get prvious state, so in case that we have the files, we want to set the images to
      // either target that files
      setFormData((prevState) => ({
        ...prevState,
        images: event.target.files,
      }));
    }

    // this is for text or boolean or numbers
    // but what if we dont have the images or files, then we "setFormData" and going to return an
    // object
    if (!event.target.files) {
      setFormData((prevState) => ({
        ...prevState,

        // if the boolean is not null then put it into "event.target.id" but if its null just do "event.taraget.value"
        // it is the boolean
        [event.target.id]: boolean ?? event.target.value,
      }));
    }
  };



  const submitCreateListing = async (event) => {

    // first we need to prevent the defualt behavior of refreshing the page by just getting event here
    event.preventDefault();
    
    setLoading(true);

    // the discounted price is always less than regular price if this is not happen then we can send error to
    // the user, so for this we make a condition
    if (+discountPrice >= +regularPrice) {
      setLoading(false);
      alert("Discounted Price Needs To Be Less Than Regular Price")
      return;
    }

    // image length we want only 6
    if (images.length > 6) {
      setLoading(false);
      alert("Maximum 6 Imaages Are Allowed");
      return;
    }

    // let geolocation = {};
    // let location;
    // if (geolocationEnable) {
    //   const response = await fetch(`https://maps.googleapis.com/maps/api//geocode/json?address=${address}&key${process.env.REACT.APP.GEOCODE.API.KEY}`);
    //   const data = await response.json();
    //   console.log(data);
    //   geolocation.latitude = data.results[0]?.geometry.location.lat ?? 0;
    //   geolocation.longitude = data.results[0]?.geometry.location.lng ?? 0;

    //   location = data.status === "ZERO_RESULTS" && undefined;

    //   if (location === undefined || location.includes("undefined")) {
    //     setLoading(false);
    //     alert("Please Enter The Correct Address");
    //     return;
    //   }

    // } else {
    //   geolocation.lat = latitude;
    //   geolocation.lng = longitude;
    // }



    // after the latitude and longitude we need to upload the images to the storage, we upload them one by one
    // after that we're going to get the url of that image that is inside the storage
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();

        // in order to keep image completly unique, for ex the person upload the same image two times then we
        // add some random numbers and letters, in order to do that we use a package called "uuid".
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");

            // switch (snapshot.state) {
            //   case "paused":
            //     console.log("Upload is paused");
            //     break;
            //   case "running":
            //     console.log("Upload is running");
            //     break;

            //     default :
            // }

          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      })
    }

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))).catch((error) => {
        setLoading(false);
        alert("Images Not Uploaded");
        console.log(error.message);
        return;
      }
    )
    // console.log(imgUrl);

    const formDataCopy = {
      ...formData,
      imgUrls,
      // geiolocation,
      timestamp: serverTimestamp(),
      useRef: auth.currentUser.uid,
    }

    delete formDataCopy.images;
    !formDataCopy.offer && delete formDataCopy.discountPrice;

    // Now we have to submit this "formData" form, formDataCopy to the database, for this we create "docRef"
    const docRef = await addDoc(collection(database, "listing"), formDataCopy);
    // here we setLoading false
    setLoading(false);
    alert("Form Successfully Submitted");
    // navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  }

  if (loading) {
    return <Spinner />
  }



  return (
    <>
      <EC2Header />
      <main className="create_listing_main">
        <h1>Create Listing</h1>

        <form className="create_listing_form" onSubmit={submitCreateListing}>
          <div className="create_listing_form_elements">
            <p>Sell/Rent</p>
            {/* we can try this button by id "type" */}
            <div className="sell_rent_form_buttons y_axis_center">
              <button
                type="button"
                id="type"
                value="rent"
                onClick={afterClickOnCreateListInput}
                className={`${type === "rent" ? "sell_button" : "sell_background"
                  }`}
              >
                Sell
              </button>
              <button
                type="button"
                id="type"
                value="sell"
                onClick={afterClickOnCreateListInput}
                className={`${type === "sell" ? "sell_button" : "sell_background"
                  }`}
              >
                Rent
              </button>
            </div>
          </div>

          <div className="create_listing_form_elements">
            <p>Name</p>
            {/* we add here "onChange" because we want to track changes inside the input */}
            <input
              type="text"
              className="create_list_input_field"
              placeholder="Name"
              id="name"
              value={name}
              min="9"
              max="90"
              onChange={afterClickOnCreateListInput}
            />
          </div>

          <div className="create_listing_form_elements">
            <p>Mileage</p>
            <input
              type="number"
              className="create_list_input_field"
              placeholder="Mileage"
              id="mileage"
              value={mileage}
              min="90"
              max="300"
              required
              onChange={afterClickOnCreateListInput}
            />
          </div>
          <div className="create_listing_form_elements">
            <p>Price</p>
            <input
              type="number"
              className="create_list_input_field"
              placeholder="Price"
              id="price"
              value={price}
              min="12"
              max="99"
              required
              onChange={afterClickOnCreateListInput}
            />
          </div>

          <div className="create_listing_form_elements">
            <p>Electric</p>
            {/* we can try this button by id "type" */}
            <div className="sell_rent_form_buttons y_axis_center">
              <button
                type="button"
                id="electric"
                value={true}
                onClick={afterClickOnCreateListInput}
                className={`${electric ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="electric"
                onClick={afterClickOnCreateListInput}
                className={`${!electric ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="create_listing_form_elements">
            <p>Petrol</p>
            {/* we can try this button by id "type" */}
            <div className="sell_rent_form_buttons y_axis_center">
              <button
                type="button"
                value={true}
                id="petrol"
                onClick={afterClickOnCreateListInput}
                className={`${petrol ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="petrol"
                onClick={afterClickOnCreateListInput}
                className={`${!petrol ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="create_listing_form_elements">
            <p>Diesel</p>
            {/* we can try this button by id "type" */}
            <div className="sell_rent_form_buttons y_axis_center">
              <button
                type="button"
                value={true}
                id="diesel"
                onClick={afterClickOnCreateListInput}
                className={`${diesel ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="diesel"
                onClick={afterClickOnCreateListInput}
                className={`${!diesel ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="create_listing_form_elements">
            <p>Address</p>
            <textarea
              type="text"
              className="create_list_input_field"
              placeholder="Address"
              id="address"
              value={address}
              required
              onChange={afterClickOnCreateListInput}
            />
          </div>

          {/* {!geolocationEnable && (
            <>
              <div className="create_listing_form_elements">
                <p>Latitude</p>
                <input
                  type="number"
                  className="create_list_input_field"
                  id="latitude"
                  value={latitude}
                  required
                  min="-90"
                  max="90"
                  onChange={afterClickOnCreateListInput}
                />
              </div>

              <div className="create_listing_form_elements">
                <p>Longitude</p>
                <input
                  type="number"
                  className="create_list_input_field"
                  id="longitude"
                  value={longitude}
                  required
                  min="-180"
                  max="180"
                  onChange={afterClickOnCreateListInput}
                />
              </div>
            </>
          )} */}

          <div className="create_listing_form_elements">
            <p>Description</p>
            <textarea
              type="text"
              className="create_list_input_field"
              placeholder="Description"
              id="description"
              value={description}
              required
              onChange={afterClickOnCreateListInput}
            />
          </div>

          <div className="create_listing_form_elements">
            <p>Offers</p>
            {/* we can try this button by id "type" */}
            <div className="sell_rent_form_buttons y_axis_center">
              <button
                type="button"
                id="offer"
                value={true}
                onClick={afterClickOnCreateListInput}
                className={`${offer ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                id="offer"
                value={false}
                onClick={afterClickOnCreateListInput}
                className={`${!offer ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="create_listing_form_elements">
            <p>Regular Price</p>
            <div className="regular_price_input_field y_axis_center">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={afterClickOnCreateListInput}
                min="60"
                max="9000000"
                required
              />

              {type === "rent" && (
                <div>
                  <p>$ / Months</p>
                </div>
              )}
            </div>
          </div>

          {/* if offer is true then we can render this element */}
          {offer && (
            <div className="create_listing_form_elements">
              <p>Discount Price</p>
              <div className="regular_price_input_field y_axis_center">
                <input
                  type="number"
                  id="discountPrice"
                  value={discountPrice}
                  onChange={afterClickOnCreateListInput}
                  min="60"
                  max="9000000"
                  required={offer}
                />

                {type === "rent" && (
                  <div>
                    <p>$ / Months</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="create_listing_form_elements">
            <p>Images</p>
            <p>The First Image Will Cover (Max 6)</p>
            <input
              type="file"
              id="images"
              className="create_list_input_field"
              onChange={afterClickOnCreateListInput}
              accept=".jpg, .png, .jpeg"
              multiple
              required
            />
          </div>

          <div className="form_buttons">
            <button type="submit">Create Listing</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateListing;

// if you have have copy "CreateListing" link and if you signout we can still have access to that
// page even without being authorised and we can submit the listing.....so we can prevent this by making it
// a private route
// go on to "PortfolioRoutes.jsx" and add it to the "PrivateRoutes.jsx".

// in the form we want to also add latitude and logitude of google map,
// for those who don't have a bank cards, they dont use the geolocation API of google, because geolocation
// API needs your billing information
// So in case we dont have a bank card, then we can add to the ability to manually add the latitude and
// longitude of the address because now if you write down the address
// now we just add the manually put our address and the latittude and logitude

// so now in this page we add useState hook for geolocation, initially it is false by default but in case if
// you dont have the bank cards you can set that initial value to true, so you be able to add it manually


