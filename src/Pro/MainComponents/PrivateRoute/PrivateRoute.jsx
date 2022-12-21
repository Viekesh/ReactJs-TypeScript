import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../../ECommerce/EC2/Components/Spinner';
import { UseAuthStatus } from '../Hook/UseAuthStatus';
import "./PrivateRoute.scss";

const PrivateRoute = () => {

  // when you put here false value the page is always redirected to signin page, so we can solve this from 
  // firebase by using the hooks, so lets go on to the "UseAuthStatus" for creating the hook
  // const loggedIn = false;

  const { loggedIn, checkingStatus } = UseAuthStatus();

  if (checkingStatus) {
    return <div className='private_route'><Spinner /></div>
  }

  // if the person signing, its going to render inside which is profile by using the outlet here otherwise
  // it is navigate to the "SignIn"
  return (
    <div className='private_route'>
      {
        loggedIn ? <Outlet /> : <Navigate to="/SignIn" />
      }
    </div>
  )
}

export default PrivateRoute;



// we need to put these private route in "ProjectRoutes.jsx"


