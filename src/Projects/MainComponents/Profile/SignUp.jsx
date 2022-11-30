import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import BottomNavigation from "../Navigation/BottomNavigation";
import OAuth from "../OAuth/OAuth";

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

    console.log(formData);
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

        <form action="" className="sign_in_form">
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
              className="invisible_pass"
              onClick={() => setShowPass((prevState) => !prevState)}
            />
          ) : (
            <AiFillEye
              className="visible_pass"
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
            <NavLink to="/SignUp">
              <button type="submit">SignUp</button>
            </NavLink>
          </div>
        </form>

        <OAuth />
      </section>
    </>
  );
};

export default SignUp;
