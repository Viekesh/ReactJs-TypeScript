import "./CreateListing.scss";
import EComHeader from '../../EComHeader';
import { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import { auth, database, storage } from "../../../../FirebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateListing = () => {

  // we create this hook to get initial state of the form, after user fill the data in this form then we
  // update that data and send them by using the "useState" function (setFormData);

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
    regularPrice: "",
    discountPrice: "",
    images: [],
  });


  // destructure the initial values (formData information) which we have defined in the above 
  // "useState" hook otherwise we will get error
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
    images,
  } = formData;

  // In this form we have some condition because we have true or false, we have number and files also
  // and also text from the name and the address input
  const afterClickOnCreateListInput = (event) => {

    // based on the input we are going to change this boolean true or false and use that boolean to
    // change the state in the "formData",
    let boolean = null;

    // if the "event" (input or event.target.value) equal to "true" then we want this boolean equal to "true"
    if (event.target.value === "true") {
      boolean = true;
    }

    if (event.target.value === "false") {
      boolean = false;
    }

    // this is for files
    // if input is files so in this case "setFormData"
    if (event.target.files) {
      // first here we get prvious state, so in case that we have the files, we want to set the images to
      // either target that files
      setFormData((prevState) => ({
        ...prevState,
        images: event.target.files
      }))
    }

    // this is for booleans/text/numbers
    // if we don't have the images/files and the boolean values, then with the help of "useState" function "setFormData"
    // we going to return an object
    if (!event.target.files) {
      setFormData((prevState) => ({
        ...prevState,

        // if the boolean is not null then put it into "event.target.id" but if its null just do "event.taraget.value"
        [event.target.id]: boolean ?? event.target.value
      }))
    }

  }




  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(null);

  // const [user, setUser] = useState(null);

  const SubmitCreateListing = async (event) => {
    // first we need to prevent the defualt behavior of refreshing the page by just getting event here
    event.preventDefault();

    setLoading(true);

    // the discounted price is always less than regular price if this is not happen then we can send error to
    // the user, so for this we make a condition
    // sometimes in the form the number is considered as a string, so here we use "+" sign to prevent that
    // problem by converting it string into number
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

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        // const storage = getStorage();

        // in order to keep image completly unique, for ex the person upload the same image two times then we
        // add some random numbers and letters, in order to do that we use a package called "uuid".
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on("state_changed", (snapshot) => {

          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log("Upload is " + progress + "% done");

          setProgress(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }

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
              // console.log(downloadURL);
              // alert("Images Successfully Uploaded");
            });
          }
        );
      })
    }

    // console.log(storeImage);

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))).catch((error) => {
        setLoading(false);
        alert("Images Not Uploaded");
        console.log(error.message);
        return;
      }
      )
    // console.log(imgUrls);

    const formDataCopy = {
      ...formData,
      imgUrls,
      // geiolocation,
      timestamp: serverTimestamp(),
      useRef: auth.currentUser.uid,
    }

    delete formDataCopy.images;

    // if the offer is not available
    !formDataCopy.offer && delete formDataCopy.discountPrice;
    // delete formDataCopy.latitude;
    // delete formDataCopy.longitude;

    try {
      const docRef = await addDoc(collection(database, "listings"), {
        ...formDataCopy,
      });

      setLoading(false);
      alert("Form Successfully Submitted");

      // we use here dynamic url because we want to show the listing of that particular user
      // navigate(`/category/${formDataCopy.type}/${docRef.id}`);
    } catch (error) {
      console.log(error.message);
    }

    // we just navigate the user to this url and the url is dynamic because we want the url to be based
    // on the listing id
    // we check here there is a "rent" or "sale" 
  }

  if (loading) {
    return <Spinner />
  }



  return (
    <div className='create_list'>
      <EComHeader />
      <div className="page_heading">
        <h2>Create List</h2>
      </div>

      <div className="e_com_form">
        <form className="list_properties" onSubmit={SubmitCreateListing}>

          <div className="list_element">
            <div className="sell_rent_form_buttons">
              <button
                type="button"
                id="type"
                value="rent"
                onClick={afterClickOnCreateListInput}
                className={`${type === "rent" ? "sell_button" : "sell_background"}`}
              >
                Rent
              </button>

              Select

              <button
                type="button"
                id="type"
                value="sell"
                onClick={afterClickOnCreateListInput}
                className={`${type === "sell" ? "sell_button" : "sell_background"}`}
              >
                Sell
              </button>
            </div>
          </div>

          <div className="list_element">
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              value={name}
              onChange={afterClickOnCreateListInput}
              minLength="9"
              maxLength="90"
              required
            />
          </div>

          <div className="list_element">
            <input
              type="number"
              placeholder="Mileage"
              id="mileage"
              value={mileage}
              onChange={afterClickOnCreateListInput}
              min="90"
              max="900"
              required
            />
          </div>

          <div className="list_element">
            <input
              type="number"
              placeholder="Price"
              id="price"
              value={price}
              onChange={afterClickOnCreateListInput}
              minLength="12"
              maxLength="99"
              required
            />
          </div>

          <div className="list_element">
            <div className="sell_rent_form_buttons">
              <button
                type="button"
                id="electric"
                value={true}
                onClick={afterClickOnCreateListInput}
                className={`${electric ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>

              Electric

              <button
                type="button"
                id="electric"
                value={false}
                onClick={afterClickOnCreateListInput}
                className={`${!electric ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="list_element">
            <div className="sell_rent_form_buttons">
              <button
                type="button"
                id="petrol"
                value={true}
                onClick={afterClickOnCreateListInput}
                className={`${petrol ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>

              Petrol

              <button
                type="button"
                id="petrol"
                value={false}
                onClick={afterClickOnCreateListInput}
                className={`${!petrol ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="list_element">
            <div className="sell_rent_form_buttons">
              <button
                type="button"
                id="diesel"
                value={true}
                onClick={afterClickOnCreateListInput}
                className={`${diesel ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>

              Diesel

              <button
                type="button"
                id="diesel"
                value={false}
                onClick={afterClickOnCreateListInput}
                className={`${!diesel ? "sell_button" : "sell_background"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="list_element">
            <textarea
              type="text"
              placeholder="Enter Your Address"
              id="address"
              value={address}
              onChange={afterClickOnCreateListInput}
            ></textarea>
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

          <div className="list_element">
            <textarea
              type="text"
              placeholder="Description"
              id="description"
              value={description}
              onChange={afterClickOnCreateListInput}
            ></textarea>
          </div>

          <div className="list_element">
            <div className="sell_rent_form_buttons">
              <button
                type="button"
                id="offer"
                value={true}
                onClick={afterClickOnCreateListInput}
                className={`${offer ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>

              Offer

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

          {type === "rent" && (
            <div className="list_element">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={afterClickOnCreateListInput}
                placeholder="Regular Price"
                minLength="60"
                maxLength="9000000"
              />
              <div>
                <p>$ / Months</p>
              </div>
            </div>
          )}

          {
            offer && (
              <div className="list_element">
                <input
                  type="number"
                  id="discountPrice"
                  value={discountPrice}
                  onChange={afterClickOnCreateListInput}
                  placeholder="Discount Price"
                  minLength="60"
                  maxLength="9000000"
                  required={offer}
                />

                {type === "rent" && (
                  <div>
                    <p>$ / Months</p>
                  </div>
                )}
              </div>
            )
          }

          <div className="list_element">
            <input
              type="file"
              id="images"
              // accept=".jpg, .png, .jpeg"
              onChange={afterClickOnCreateListInput}
              multiple
              required
              className="type_file"
            />
          </div>

          <div className="e_com_form_submit_button">
            <button
              type="submit"
              disabled={progress !== null && progress < 100}
            >Submit Form</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateListing;





// The above code is a React component for creating a listing. It includes a form that the user fills in with details about the listing, such as its type (rent or sale), name, mileage, price, fuel type, address, description, offer, and prices (regular and discounted). The component also handles image uploads for the listing.

// The component uses useState to keep track of the form data and loading state. It also imports several functions and objects from Firebase, such as auth, database, storage, and v4 from uuid.

// The function afterClickOnCreateListInput is triggered when the user clicks on an input field, and updates the form data accordingly based on the input value. If the input is a file, the images property in the form data is set to the selected files. If the input is a boolean, its value is set to true or false. If it's not a file or boolean, its value is set to the target value.

// The function submitCreateListing is triggered when the user submits the form. It first prevents the default behavior of refreshing the page, then checks the validity of the form data. If the discounted price is greater than or equal to the regular price, an error is displayed. If there are more than 6 images, an error is displayed. If the data is valid, the images are uploaded to Firebase storage with unique file names generated using uuidv4. After the images are uploaded, the listing details and image URLs are stored in the Firebase Firestore database using the addDoc function. Finally, the user is navigated to a different page using the useNavigate hook.