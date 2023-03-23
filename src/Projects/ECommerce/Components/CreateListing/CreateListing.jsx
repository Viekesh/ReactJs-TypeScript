import "./CreateListing.scss";
import EComHeader from '../../EComHeader';
import { useState } from "react";

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
    // images: {},
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
    // images,
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


    // this is for booleans
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


  const [loading, setLoading] = useState(false);

  const submitCreateListing = async (event) => {

    event.preventDefault();

    setLoading(true);
  }




  return (
    <div className='create_list'>
      <EComHeader />
      <div className="page_heading">
        <h2>Create List</h2>
      </div>

      <div className="e_com_form">
        <form className="list_properties" onSubmit={submitCreateListing}>

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
              onClick={afterClickOnCreateListInput}
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
              onClick={afterClickOnCreateListInput}
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
              onClick={afterClickOnCreateListInput}
              minLength="12"
              maxLengt="99"
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
              onClick={afterClickOnCreateListInput}
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
              onClick={afterClickOnCreateListInput}
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
                onClick={afterClickOnCreateListInput}
                placeholder="Regular Price"
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
                  onClick={afterClickOnCreateListInput}
                  placeholder="Discount Price"
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
            )
          }

          <div className="list_element">
            <input
              type="file"
              id="images"
              // accept=".jpg, .png, .jpeg"
              multiple
              required
              className="type_file"
            />
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateListing;


