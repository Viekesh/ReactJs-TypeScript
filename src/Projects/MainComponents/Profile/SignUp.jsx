import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import BottomNavigation from "../Navigation/BottomNavigation";
import OAuth from "../OAuth/OAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, database } from "../../../firebaseConfig";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const userNavigateaftersignup = useNavigate();

  const handleFormData = (event) => {
    setFormData((preState) => ({
      ...preState,
      [event.target.id]: event.target.value,
    }));

    // console.log(formData);
  };

  // we creating this function for submiting the form data
  const submitFormData = async (event) => {
    // after creating the function (like this "const submitFormData = () => {}") go on to page and
    // click on signup button, when click on the function the page is refreshes
    // to prevent this page refresh we take "event" as a parameter and type "event.preventDefault"
    event.preventDefault();

    // now we need authenticate the user
    try {
      // const app = initializeApp(firebaseConfig);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredential.user;
      // console.log(user);

      // Here we create the copy of our formData, we want to get all the things inside, so this is going
      // to be an object and we are going to spread the "formData" so we can get everything inside  from "formData" and
      // we can put it inside the variable "formDataCopy"
      const formDataCopy = { ...formData };

      // Now we can remove the password, we just use delete one user information that is a "password"
      delete formDataCopy.password;

      // Now we need to add that time when the user is registered (means we can save those time when the user can register)

      // for saving the time we dont need to use the date contructor from JavaScript, there is a simpler way in firebase
      // firebase gives us a method of server timestamp that is going to save the time based on the server, and this is very precise saving actually
      // we just add this "formDataCopy" to the another field called "timestamp" which is equal to "serveTimestamp()" which is coming from firebase/firestore
      formDataCopy.timestamp = serverTimestamp();

      // Now we have "formDataCopy" without password or with the timestamp, now we can actually save it inside the database

      // So there is a method inside the firestore called "Set Doc", this is actually returns the promise as well
      // we need to add await here and we used a "setDoc" and it was going to get a "doc" which is also coming from firebase/firestore
      await setDoc(doc(database, "users", user.uid), {
        ...formDataCopy
      });

      alert("Registration Was Successful");

      userNavigateaftersignup("/");

      // this "doc" is going to get three things first is "database" which is we created inside the "firebaseConfig" and
      // we can save it inside the collection called "webUsers" and then we want to save it with the same "id" of the
      // authentication "id" (uid)
      // the way we can access this "uid" because we are getting the "user" here (user.uid) and after we want to put "formDataCopy" here
      // whatever inside the "formDataCopy" we want to save it inside this collection with the  uid ("user.uid")
      //
    } catch (error) {
      console.log(error);
      alert("There Is Some Error While SignUp The Form");
    }
  };

  return (
    <>
      <TopNavigation />
      <PortfolioLinks />
      <BottomNavigation />
      <section className="sign_in">
        <div className="page_heading">
          <h3>SignUp</h3>
        </div>

        {/* the form is going to call a function after calling and submit the form as well */}
        <form className="sign_in_form" onSubmit={submitFormData}>
          <input
            type="text"
            className="input_field"
            id="name"
            value={name}
            placeholder="Enter Your Full Name"
            onChange={handleFormData}
          />
          <input
            type="text"
            className="input_field"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleFormData}
          />
          <input
            type={showPass ? "text" : "password"}
            className="input_field"
            id="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={handleFormData}
          />

          {showPass ? (
            <AiFillEyeInvisible
              className="invisible_pass_sign_up"
              onClick={() => setShowPass((prevState) => !prevState)}
            />
          ) : (
            <AiFillEye
              className="visible_pass_sign_up"
              onClick={() => setShowPass((prevState) => !prevState)}
            />
          )}

          <div className="another_form_links">
            <NavLink to="/SignIn">
              <button>SignIn</button>
            </NavLink>
            <NavLink to="/ForgotPass">
              <button>Forgot Password</button>
            </NavLink>
          </div>

          <div className="form_buttons">
            <button type="submit">SignUp</button>
          </div>
        </form>

        <OAuth />
      </section>
    </>
  );
};

export default SignUp;

// we create registration process for user, now we need to store user to the database
// but if you submit this "formData", the problem is that password, we dont want to save our password
// to the database. This is not the secure way because firebase has a system for saving the password
// they use "password hash parameter" (on authentication page of firebase project, in users section on right side)
// In this process users password has hash 8 times, this is crazy they change the password many times they hash it
// So if even the person or hacker find the password of users inside the "authentication" of firebase and
// they can hack the google is still they cannot understand the password.
// So we dont directly save the password in the firestore, because people can easily understand the password of our users
// So we need to remove the password, we don't want to save the password because it is safe inside the authentication

// So we need to have this form data
