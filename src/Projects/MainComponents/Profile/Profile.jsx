import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../../../firebaseConfig";
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
    alert("You Are Successfully Logout");
  };

  // this hook is for "edit" functionality
  const [changeDetail, setChangeDetail] = useState(false);

  const editName = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const clickHereToEditName = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update display name in the firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore storage
        const docRef = doc(database, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });

        alert("Profile Name Updated");
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
            className={`input_field ${changeDetail && "edit_name"}`}
            id="name"
            value={name}
            disabled={!changeDetail}
            onChange={editName}
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
              <div
                onClick={() => {
                  changeDetail && clickHereToEditName();
                  setChangeDetail((prevState) => !prevState);
                }}
              >
                {changeDetail ? "Apply Change" : "Edit"}
              </div>
              <button onClick={onLogout}>sign out</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
