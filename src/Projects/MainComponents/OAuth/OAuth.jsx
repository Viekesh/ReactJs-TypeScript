import React from 'react';
import { FcGoogle } from "react-icons/fc";
import "./OAuth.scss";

const OAuth = () => {
  return (
    <div className="oauth">
      <button>
        <FcGoogle className='oauth_icon' />
        Continue With Google
      </button>
    </div>
  )
}

export default OAuth;