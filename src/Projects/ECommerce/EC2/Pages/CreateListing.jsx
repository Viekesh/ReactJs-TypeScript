import React, { useState } from "react";
import EC2Header from "../Components/EC2Header";
import "../Styles/CreateListing.scss";

const CreateListing = () => {
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
      // first here we get prvious state, so in case that we have the files, we want to set the images to either target that files
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

  return (
    <>
      <EC2Header />
      <main className="create_listing_main">
        <h1>Create Listing</h1>
        <form className="create_listing_form">
          <div className="create_listing_form_elements">
            <p>Sell/Rent</p>
            {/* we can try this button by id "type" */}
            <div className="sell_rent_form_buttons y_axis_center">
              <button
                type="button"
                value="rent"
                id="type"
                onClick={afterClickOnCreateListInput}
                className={`${
                  type === "rent" ? "sell_button" : "sell_background"
                }`}
              >
                Sell
              </button>
              <button
                type="button"
                value="sell"
                id="type"
                onClick={afterClickOnCreateListInput}
                className={`${
                  type === "sell" ? "sell_button" : "sell_background"
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
              minLength="9"
              maxLength="90"
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
                value={true}
                id="electric"
                onClick={afterClickOnCreateListInput}
                className={`${!electric ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="electric"
                onClick={afterClickOnCreateListInput}
                className={`${electric ? "sell_button" : "sell_background"}`}
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
                className={`${!petrol ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="petrol"
                onClick={afterClickOnCreateListInput}
                className={`${petrol ? "sell_button" : "sell_background"}`}
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
                className={`${!diesel ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="diesel"
                onClick={afterClickOnCreateListInput}
                className={`${diesel ? "sell_button" : "sell_background"}`}
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

          <div className="create_listing_form_elements">
            <p>Description</p>
            <textarea
              type="text"
              className="create_list_input_field"
              placeholder="Description"
              id="desription"
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
                value={true}
                id="offer"
                onClick={afterClickOnCreateListInput}
                className={`${!offer ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="diesel"
                onClick={afterClickOnCreateListInput}
                className={`${offer ? "sell_button" : "sell_background"}`}
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
                minLength="60"
                maxLength="9000000"
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


