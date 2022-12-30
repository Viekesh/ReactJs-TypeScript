import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../FirebaseConfig";

const Profile = () => {
  const authenticate = auth;

  const afterSignOut = useNavigate();

  const [formData, setFormData] = useState({
    name: authenticate.currentUser.displayName,
    email: authenticate.currentUser.email,
  });

  const { name, email } = formData;

  // this is for logOut feature
  const onLogout = () => {
    authenticate.signOut();
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
      if (authenticate.currentUser.displayName !== name) {
        
        // update display name in the firebase authentication
        await updateProfile(authenticate.currentUser, {
          displayName: name,
        });

        // update name in the firestore storage
        const docRef = doc(database, "users", authenticate.currentUser.uid);
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
  );
};

export default Profile;
