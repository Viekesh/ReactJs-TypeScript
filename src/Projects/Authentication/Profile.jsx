import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, database } from "../../FirebaseConfig";
import PageHeading from "../Components/PageHeading/PageHeading";
import BottomNav from "../Portfolio/Navigation/BottomNav";
import TopNav from "../Portfolio/Navigation/TopNav";
import "./Profile.scss";



const Profile = () => {
  const authenticate = auth;

  const afterSignOut = useNavigate();

  const [formData, setFormData] = useState({
    firstname: authenticate.currentUser.displayName,
    email: authenticate.currentUser.email,
  });

  const { firstname, email } = formData;

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
      if (authenticate.currentUser.displayName !== `${firstname}`) {
        // update display name in the firebase authentication
        await updateProfile(authenticate.currentUser, {
          displayName: `${firstname}`,
        });

        // update name in the firestore storage
        const docRef = doc(database, "portfolioUsers", authenticate.currentUser.uid);
        await updateDoc(docRef, {
          firstname,
        });

        alert("Profile Name Updated");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="my_profile">
        <PageHeading heading="Profile" />

        <form className="sign_in_form profile_name">
          <input
            type="text"
            className={`input_field ${changeDetail && "edit_name"}`}
            id="firstname"
            value={firstname}
            disabled={!changeDetail}
            onChange={editName}
          />
          <input
            type="text"
            className="input_field profile_email"
            id="email"
            value={email}
            disabled={!changeDetail}
            onChange={editName}
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

        <div className="e_com_create_listing_button">
          <NavLink to="/CreateListing">
            <button type="submit">SELL/RENT</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Profile;


