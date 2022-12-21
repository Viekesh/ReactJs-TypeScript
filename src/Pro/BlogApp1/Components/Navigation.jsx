import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import "./Stylesheets/Navigation.css";



const Navigation = ({ active, setActive, user, setUser }) => {

  // We need userId so we have to determine whether user is loggedIn or not in our application.
  // In firebase userId is stored in the form of uid
  const userId = user?.uid;

  // Verify userId
  // console.log("userId : ", userId);

  // Check user firstname or lastname (displayName) is showing or not
  // console.log("name : ", user.displayName);

  const [shoMenu, setShoMenu] = useState(false);

  const toggleMobMenu = () => {
    setShoMenu(!shoMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/Auth");
      alert("You are logout");
    })
  }

  return (
    <div className='blog_navigation'>
      <nav className="blog_nav">
        <div className="blog_logo">
          <NavLink to="/Home">
            <h4>TechTalk</h4>
          </NavLink>
        </div>

        <div className={`blog_nav_section section_style ${shoMenu ? "overlay" : ""}`} id="Navigation">
          <div className="blog_section_elements">

            <NavLink
              to="/Auth"
              className={`child_elements ${active === "Auth" ? "active" : ""}`}
            >
              <h5 className="y_axis_center">Account</h5>
            </NavLink>

            <NavLink
              to="/BlogLandingPage"
              className={`child_elements ${active === "BlogLandingPage" ? "active" : ""}`}
              onClick={() => setActive("BlogLandingPage")}
            >
              <h5 className="y_axis_center">Home</h5>
            </NavLink>

            <NavLink
              to="/Create"
              className={`child_elements ${active === "Create" ? "active" : ""}`}
            >
              <h5 className="y_axis_center">Create</h5>
            </NavLink>

            <NavLink
              to="/Trending"
              className={`child_elements ${active === "Trending" ? "active" : ""}`}
            >
              <h5 className="y_axis_center">Trending</h5>
            </NavLink>

            <NavLink
              to="/About"
              className={`child_elements ${active === "About" ? "active" : ""}`}
            >
              <h5 className="y_axis_center">About</h5>
            </NavLink>

          </div>
        </div>

        <div className="navigation_buttons">

          <div className="log_in_icon x_y_axis_center">
            {userId ? (
              <>
                <NavLink to="/Auth" className="log_icon x_y_axis_center">
                  <AccountCircleIcon />
                </NavLink>
                &nbsp;
                <p>
                  <span>
                    {user?.displayName}
                  </span>
                  &nbsp;
                  <span>
                    <b onClick={handleLogout}>Logout</b>
                  </span>
                </p>
              </>
            ) : (
              <NavLink
                to="/Auth"
                className={`log_icon x_y_axis_center ${active === "login" ? "active" : ""}`}
                onClick={() => setActive("login")}
              >
                <AccountCircleIcon />
              </NavLink>
            )}
          </div>

          <div className="menu_icon">
            <div className="only-mobile mobile-menu-button-wrapper">
              <button className={`hamburger hamburger--3dx ${shoMenu ? "is-active" : ""}`}
                type="button"
                onClick={toggleMobMenu}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navigation;