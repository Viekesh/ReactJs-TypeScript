import { getAuth, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import "./Profile.scss";
import { FaCar } from "react-icons/fa";

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

  // this "useEffect" we use to fetch user listing (created by "CreateForm" page)
  useEffect(() => {
    const fetchUserListing = async () => {
      // first we need to created reference, reference is the address which we getting from the database firebase/firestore
      const listingRef = collection(database, "listings");

      // here we get the list which is created by that user, for this we make a query
      // we use the query method from firebase/firestore
      // query is first get "listingRef" which is created by user by using "createForm",
      // after it we can asked, where you want to get that?
      // the place is "userRef" that we have added to the listing (CreateForm) this one should be equal "==", auth.cureentUser.uid
      // then just check that one with the "userRef" inside the listing (CreateForm)
      // after it we can sort this as well, to sort this we using "orderBy" which is coming from "firebase/firestore"
      // we can order by time which is a "timestamp" and we make it descending so that the new one comes first
      const query = query(listingRef, where("userRef", "==", auth.currentUser.uid), orderBy("timestamp", "descending"));

      // after the query we make getDocs to get the document, for this we created querySnap which can get snapshot
      const querySnap = await getDocs(query);

      // now we created a variable "listings", we make it empty bracket from beginning and we can loop through this
      // "querySnap" and add that listing data to this listing variable
      let listings = [];

      // now we use this variable to show listing in our website, so we loop through this "querySnap" using "forEach" method
      // "forEach" gives us each document that fetch and we just return 
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      // 
    }
    fetchUserListing();
  }, []);

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

        <div className="sell_or_rent_button">
          <Link to="/CreateListing">
            <button type="submit y_axis_center">
              <FaCar className="car_icon" /> Sell Or Rent Your Car
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Profile;
