import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import BottomNavigation from "../Navigation/BottomNavigation";
import OAuth from "../OAuth/OAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";



const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log(user);

    } catch (error) {
      console.log(error);
    }
  }



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


