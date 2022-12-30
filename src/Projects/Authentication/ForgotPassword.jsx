import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import BottomNav from "../Portfolio/Navigation/BottomNav";
import TopNav from "../Portfolio/Navigation/TopNav";
import GAuth from "./GAuth";
import "./Auth.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleFormData = (event) => {
    setEmail(event.target.value);
  };

  const forgotPassForm = async (event) => {
    event.preventDefault();
    try {
        const authenticate = auth;
      await sendPasswordResetEmail(authenticate, email);
      alert("Password Reset Email Sent. Check Your Email Inbox");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="sign_in">
        <div className="page_heading">
          <h3>Forgot Password</h3>
        </div>

        <form action="" className="sign_in_form" onSubmit={forgotPassForm}>
          <input
            type="text"
            className="input_field"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleFormData}
          />

          <div className="another_form_links">
            <NavLink to="/Register">
              <button>Register</button>
            </NavLink>
            <NavLink to="/Auth">
              <button>SignIn Instead</button>
            </NavLink>
          </div>

          <div className="form_buttons">
            <button type="submit">Send Reset Password</button>
          </div>
        </form>

        <GAuth />
      </section>
    </>
  );
};

export default ForgotPassword;
