import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import './EEENav.scss';
import SocialLinks from './SocialLinks';

const EEENav = () => {

    const [musicMenu, setMusicMenu] = useState(false);

    const toggleMusicMenu = () => {
        setMusicMenu(!musicMenu);
        document.querySelector("body").classList.toggle("body-overflow-visible");
    };
    
    return (
        <>
            <nav className="music_nav">
                <div className="music_smartphone">
                    <div className="music_nav_elements">

                        <div className="music_menu_icon x_y_axis_center">

                            <button
                                className={`hamburger hamburger--3dx x_y_axis_center ${musicMenu ? "is-active" : ""
                                    }`}
                                type="button"
                                onClick={toggleMusicMenu}
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>

                        </div>

                        <NavLink to="/" className="music_logo">
                            <h3>
                                RAM ELECTRIC
                            </h3>
                        </NavLink>

                        <div className="music_about x_y_axis_center">
                            <NavLink to="/MusicAbout" className="x_y_axis_center">
                                <AccountCircleIcon />
                            </NavLink>
                        </div>

                        <div className="music_for_desktop">
                            <div className="desktop_elements">
                                <NavLink to="/">Home</NavLink>
                            </div>
                            <div className="desktop_elements">
                                <NavLink to="/Services">Services</NavLink>
                            </div>
                            <div className="desktop_elements">
                                <NavLink to="/Home">Videos</NavLink>
                            </div>
                            <div className="desktop_elements">
                                <NavLink to="/Home">Blog</NavLink>
                            </div>
                            <div className="desktop_elements">
                                <NavLink to="/ContactUs">Contact</NavLink>
                            </div>
                            <div className="desktop_elements">
                                <NavLink to="/Home">About</NavLink>
                            </div>
                        </div>

                    </div>

                    {/* <div className="call_animate x_y_axis_center">
                        <a
                            href="tel:+918999677343"
                            className="music_links call x_y_axis_center"
                        >
                            <CallIcon />
                        </a>
                    </div> */}
                </div>
            </nav>

            <div
                className={`music_navigation_section ${musicMenu ? "ovverlay" : ""
                    }`}
            >
                <div className="music_navigation_element empty_element">
                    <NavLink to="/Home"></NavLink>
                </div>
                <div className="music_navigation_element">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="music_navigation_element">
                    <NavLink to="/Services">Services</NavLink>
                </div>
                <div className="music_navigation_element">
                    <NavLink to="/Home">Videos</NavLink>
                </div>
                <div className="music_navigation_element">
                    <NavLink to="/Home">Blog</NavLink>
                </div>
                <div className="music_navigation_element">
                    <NavLink to="/ContactUs">Contact</NavLink>
                </div>

                <SocialLinks />
            </div>
        </>
    )
}

export default EEENav;