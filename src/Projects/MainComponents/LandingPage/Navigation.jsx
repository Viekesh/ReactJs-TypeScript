import { useState } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Styles/Navigation.css";




const Navigation = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  }

  return (
    <div className='navigation'>
      <nav className="nav">
        <div className="logo">
          <NavLink to="/">
            <h4>React<br />Typescript</h4>
          </NavLink>
        </div>

        <div className={`navigation_section navigation_style ${showMenu ? "overlay" : ""}`}>
          <div className="navigation_section_elements">
            <NavLink to="/Blog"><h5 className="y_axis_center">Blog</h5></NavLink>
            <NavLink to="/Tutorials"><h5 className="y_axis_center">Tuts</h5></NavLink>
            <NavLink to="/About"><h5 className="y_axis_center">About</h5></NavLink>
          </div>
        </div>

        <div className="navigation_buttons">
          <div className="log_in_icon x_y_axis_center">
            <NavLink to="/LogIn" className="log_icon x_y_axis_center">
              <AccountCircleIcon />
            </NavLink>
          </div>

          <div className="menu_icon">
            <div className="only-mobile mobile-menu-button-wrapper">
              <button className={`hamburger hamburger--3dx ${showMenu ? "is-active" : ""}`}
                type="button"
                onClick={toggleMobileMenu}>

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