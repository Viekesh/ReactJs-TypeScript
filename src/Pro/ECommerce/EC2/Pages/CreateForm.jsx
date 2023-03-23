import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import EC2Header from '../Components/EC2Header';
import "../Styles/CreateListing.scss";
import { v4 as uuidv4 } from "uuid";
import { auth, database, storage } from '../../../../firebaseCon';
import Spinner from '../Components/Spinner';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const CreateForm = () => {

    const navigate = useNavigate();
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
        regularPrice: 0,
        discountPrice: 0,
        // latitude: -90,
        // longitude: -180,
        images: {}
    });

    // this hook is for geolocation for adding the address (latitude and logitude)
    // const [geolocationEnable, setGeolocationEnable] = useState(true);

    const [loading, setLoading] = useState(false);

    const [progress, setProgress] = useState(null);

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
        // latitude,
        // longitude,
        images,
    } = formData;



    // in this form we have some condition because we have true or false, we have number and files also
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

        // if we don't have the images/files and the boolean values, then with the help of "useState" function "setFormData"
        // we going to return an object
        if (!event.target.files) {
            setFormData((prevState) => ({
                ...prevState,

                // if the boolean is not null then put it into "event.target.id" but if its null just do "event.taraget.value"
                [event.target.id]: boolean ?? event.target.value,
            }));
        }

        // if input is files so in this case "setFormData"
        if (event.target.files) {
            // first here we get prvious state, so in case that we have the files, we want to set the images to
            // either target that files
            setFormData((prevState) => ({
                ...prevState,
                images: event.target.files,
            }))
        }
    }



    const submitCreateListing = async (event) => {
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
        // console.log(imgUrls);

        const formDataCopy = {
            ...formData,
            imgUrls,
            // geiolocation,
            timestamp: serverTimestamp(),
            useRef: auth.currentUser.uid,
        }

        delete formDataCopy.images;
        !formDataCopy.offer && delete formDataCopy.discountPrice;
        // delete formDataCopy.latitude;
        // delete formDataCopy.longitude;

        try {
            const docRef = await addDoc(collection(database, "listings"), {
                ...formDataCopy,
            });

            setLoading(false);
            alert("Form Successfully Submitted");
            navigate(`/category/${formDataCopy.type}/${docRef.id}`);
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
                                Rent
                            </button>
                            <button
                                type="button"
                                id="type"
                                value="sell"
                                onClick={afterClickOnCreateListInput}
                                className={`${type === "sell" ? "sell_button" : "sell_background"
                                    }`}
                            >
                                Sell
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
                            // accept=".jpg, .png, .jpeg"
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
    )
}

export default CreateForm;


