import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./GAuth.scss";

const GAuth = () => {
  return (
    <div className="oauth">
      <button type="button">
        <FcGoogle className="oauth_icon" />
        &nbsp; Continue With Google
      </button>
    </div>
  )
}

export default GAuth;