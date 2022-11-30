import React, {useState} from 'react';
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import "./SignIn.scss";
import { NavLink } from "react-router-dom";
import OAuth from "../OAuth/OAuth";

const ForgotPass = () => {

  const [email, setEmail] = useState("");

  const handleFormData = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <TopNavigation />
      <PortfolioLinks />
      <BottomNavigation />
      <section className="sign_in">
        <div className="page_heading">
          <h3>Forgot Password</h3>
        </div>

        <form action="" className="sign_in_form">
          <input
            type="text"
            className="input_field"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleFormData}
          />

          <div className="another_form_links">
            <NavLink to="/SignUp">
              <button>Register</button>
            </NavLink>
            <NavLink to="/SignIn">
              <button>SignIn Instead</button>
            </NavLink>
          </div>

          <div className="form_buttons">
            <NavLink to="/SignUp">
              <button type="submit">Send Reset Password</button>
            </NavLink>
          </div>
        </form>

        <OAuth />
      </section>
    </>
  )
}

export default ForgotPass;