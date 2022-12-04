import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import "./Profile.scss";

const Profile = () => {

  const auth = getAuth();

  const afterSignOut = useNavigate();

  // here initial value is come from firebase authentication
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onLogout = () => {
    auth.signOut();
    afterSignOut("/");
    alert("You Are Successfully Logout")
  }

  return (
    <>
      <TopNavigation />
      <PortfolioLinks />
      <BottomNavigation />
      <section className="my_profile">
        <div className="page_heading">
          <h3>My Profile</h3>
        </div>

        <form className="sign_in_form">
          <input
            type="text"
            className="input_field"
            id="name"
            value={name}
            disabled
          />
          <input
            type="text"
            className="input_field"
            id="email"
            value={email}
            disabled
          />

          <div className="edit_template">
            <p>do you want to change your name and username</p>
            <div className="edit_template_buttons">
              <button type="submit">edit</button>
              <button onClick={onLogout}>sign out</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
