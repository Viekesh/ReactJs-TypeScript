import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navigation from '../MainComponents/LandingPage/Components/Navigation';
import { UserAuth } from '../Context/AuthContext';
import "../MainComponents/LandingPage/Styles/Profile.css";



const LogIn = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password)
      navigate("/Profile");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }

  return (
    <>
      <Navigation />
      <form className='profile' id='pfl' onSubmit={handleSubmit}>
        <h2>LogIn Here</h2>
        <input
          type="email"
          name='email'
          id=''
          placeholder='Enter Email Here'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder='Enter Password Here'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>LogIn</button>
        No username and password sign up,
        <NavLink to="/SignUp">here</NavLink>
      </form>
    </>
  )
}

export default LogIn;