import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../MainComponents/LandingPage/Components/Navigation';
import "../MainComponents/LandingPage/Styles/Profile.css";



const LogIn = () => {
  return (
    <>
      <Navigation />
      <div className='profile'>
        <h2>LogIn Here</h2>
        <input type="email" name='email' id='' placeholder='Enter Email Here' />
        <input type="password" name="password" id="" placeholder='Enter Password Here' />
        <button>LogIn</button>
        No username and password sign up,
        <NavLink to="/SignUp">here</NavLink>
      </div>
    </>
  )
}

export default LogIn;