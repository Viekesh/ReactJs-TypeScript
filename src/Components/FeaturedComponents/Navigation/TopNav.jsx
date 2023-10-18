import { useState } from "react";
import "./TopNav.css";
import "./DesktopNav.css";
import logo from "../../../Assets/Images/logo.png";
import { BsJournalCode } from "react-icons/bs";
import { LiaBloggerB } from "react-icons/lia";
// import { GrProjects } from "react-icons/gr";
import { PiQrCodeBold } from "react-icons/pi";
// import { BiSolidUserCircle } from "react-icons/bi";
import { LuContact2 } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";
import { BiUserCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const TopNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMenu(!showMenu);
        document.querySelector("body").classList.toggle("body-overflow-visible");
    };

    return (
        <>
            <div className="top_nav">
                <div className="nav_elements y_axis_center">
                    <div className="logo x_y_axis_center">
                        <div className="icon x_y_axis_center">
                            <div className="icon_box .x_y_axis_center">
                                <img src={logo} alt="logo_icon" />
                            </div>
                        </div>
                        <div className="company_name x_y_axis_center">
                            <h1>
                                <span className="logo_techset">tech</span>
                                <span className="logo_code">Talk</span>
                            </h1>
                        </div>
                    </div>

                    <div className="github_n_nav_icon">
                        <div className="g_icon">
                            <div className="github_icon x_y_axis_center">
                                <a
                                    href="https://www.github.com/Viekesh"
                                    className="x_y_axis_center"
                                    target="_blanc"
                                >
                                    <svg
                                        height="32"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="32"
                                        data-view-component="true"
                                        className="octicon octicon-mark-github v-align-middle"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="nav_icon y_axis_center">
                            <div className="menu_icon x_y_axis_center">
                                <div className="only-mobile mobile-menu-button-wrapper">
                                    <button
                                        className={`hamburger hamburger--3dx x_y_axis_center ${showMenu ? "is-active" : ""
                                            }`}
                                        type="button"
                                        onClick={toggleMobileMenu}
                                    >
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`navigation_section navigation_style ${showMenu ? "overlay" : ""
                            }`}
                        id="Navigation"
                    >
                        <div className="nav_links">
                            <Link to="/LogIn" className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <BiUserCircle />
                                </div>
                                <h1 className="section_name">LogIn</h1>
                            </Link>
                            <div className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <BsJournalCode />
                                </div>
                                <h1 className="section_name">Case Studies</h1>
                            </div>
                            <div className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <LiaBloggerB />
                                </div>
                                <h1 className="section_name">Blogs</h1>
                            </div>
                            <div className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <PiQrCodeBold />
                                </div>
                                <h1 className="section_name">Projects</h1>
                            </div>
                            <div className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <LuContact2 />
                                </div>
                                <h1 className="section_name">Contact</h1>
                            </div>
                            <NavLink to="/About" className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <FcAbout />
                                </div>
                                <h1 className="section_name">About</h1>
                            </NavLink>
                            <NavLink to="/HomePage" className="nav_sub_section y_axis_center">
                                <div className="section_icon x_y_axis_center">
                                    <FcAbout />
                                </div>
                                <h1 className="section_name">ECommerce</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNav;
