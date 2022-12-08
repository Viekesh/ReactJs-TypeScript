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
    offer: true,
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

  const afterClickOnRentSellBtn = () => {};

  const afterClickOnCreateListInput = () => {};

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
                value="sell"
                id="type"
                onClick={afterClickOnRentSellBtn}
                className={`${
                  type === "rent" ? "sell_button" : "sell_background"
                }`}
              >
                Sell
              </button>
              <button
                type="button"
                value="rent"
                id="type"
                onClick={afterClickOnRentSellBtn}
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
                onClick={afterClickOnRentSellBtn}
                className={`${!electric ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="electric"
                onClick={afterClickOnRentSellBtn}
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
                onClick={afterClickOnRentSellBtn}
                className={`${!petrol ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="petrol"
                onClick={afterClickOnRentSellBtn}
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
                onClick={afterClickOnRentSellBtn}
                className={`${!diesel ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="diesel"
                onClick={afterClickOnRentSellBtn}
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
                onClick={afterClickOnRentSellBtn}
                className={`${!offer ? "sell_button" : "sell_background"}`}
              >
                Yes
              </button>
              <button
                type="button"
                value={false}
                id="diesel"
                onClick={afterClickOnRentSellBtn}
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
