import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo1 from '../../Images/logo1.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navigation = () => {

    const [showMobMenu, setShowMobMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobMenu(!showMobMenu);
        document.querySelector("body").classList.toggle("body-overflow-visible")
    }

    return (
        <div className='gym_navigation'>
            <nav className='gym_nav y_axis_center'>
                <div className="logo y_axis_center">
                    <img src={logo1} alt="" />
                    <h4>AlgoTrade</h4>
                </div>

                <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`} >
                    <div className="mobile-navbar">
                        <NavLink to='/'><h4 className='y_axis_center'>Home</h4></NavLink>
                        <NavLink to='/'><h4 className='y_axis_center'>Services</h4></NavLink>
                        <NavLink to='/'><h4 className='y_axis_center'>Gallery</h4></NavLink>
                        <NavLink to='/'><h4 className='y_axis_center'>Contact</h4></NavLink>
                        <NavLink to='/'><h4 className='y_axis_center'>About Us</h4></NavLink>
                    </div>
                </div>

                <div className="nav-elements y_axis_center">
                    <div className="log-in-icon x_y_axis_center">
                        <NavLink to='/LogIn' className='log-icon x_y_axis_center'><AccountCircleIcon /></NavLink>
                    </div>

                    <div className="menu-icon">
                        <div className="only-mobile mobile-menu-button-wrapper">
                            <button className={`hamburger hamburger--3dx ${showMobMenu ? "is-active" : ""}`}
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