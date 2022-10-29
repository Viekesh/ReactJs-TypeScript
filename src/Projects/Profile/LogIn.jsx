import React from 'react'
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  return (
    <div>
        No username and password sign up,
        <NavLink to="/SignUp">here</NavLink>
    </div>
  )
}

export default LogIn;