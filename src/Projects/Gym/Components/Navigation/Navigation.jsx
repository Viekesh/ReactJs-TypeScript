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
        <div className='navigation'>
            <nav className='y-axis-center'>
                <div className="logo y-axis-center">
                    <img src={logo1} alt="" />
                    <h4>AlgoTrade</h4>
                </div>

                <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`} >
                    <div className="mobile-navbar">
                        <NavLink to='/'><h4 className='y-axis-center'>Home</h4></NavLink>
                        <NavLink to='/'><h4 className='y-axis-center'>Services</h4></NavLink>
                        <NavLink to='/'><h4 className='y-axis-center'>Gallery</h4></NavLink>
                        <NavLink to='/'><h4 className='y-axis-center'>Contact</h4></NavLink>
                        <NavLink to='/'><h4 className='y-axis-center'>About Us</h4></NavLink>
                    </div>
                </div>

                <div className="nav-elements y-axis-center">
                    <div className="log-in-icon x-y-axis-center">
                        <NavLink to='/LogIn' className='log-icon x-y-axis-center'><AccountCircleIcon /></NavLink>
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