import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";
import "../SocialLinks/SocialLinks.scss"
import ReactIcon from "../Data/Images/React-icon.svg";
// import GitHubIcon from "../Data/Images/githublink.svg";
import { FaProjectDiagram } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import linkedInLogo from "../../Images/linkedInLogo.png";
import gmaillogo from "../../Images/Gmail-Logo.jpg";
import whtLogo from "../../Images/WhatsApp.svg.webp";


const lnkin = "../../Images/linkedInLogo.png";

const socialNetData = [
  {
    id : 1,
    name : "LinkedIn",
    img : "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    link: "https://www.linkedin.com/in/vikesh-gaikwad-994872194"
  },
  {
    id : 1,
    name : "GMail",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png",
    link: "mailto:vikesh.g99@gmail.com"
  },
  {
    id : 1,
    name : "WhatsApp",
    img : "https://cdn-icons-png.flaticon.com/512/174/174879.png",
    link: " https://wa.me/[+917620174776]"
  }
]



const TopNav = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <nav className="top_navigation x_y_axis_center">
      <div className="for_smartphone">
        <div className="nav_elements">

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

          <div className="github_icon x_y_axis_center">
            <a
              href="https://www.github.com/Viekesh"
              className="x_y_axis_center"
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
                <path
                  // fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>

          <div
            className={`navigation_section navigation_style ${showMenu ? "overlay" : ""
              }`}
            id="Navigation"
          >
            <div className="navigation_section_elements">

              <NavLink className="navigation_categories y_axis_center">
                <div className="category_icon_name y_axis_center">
                  <div className="category_icon y_axis_center">
                    <FaProjectDiagram className="icon" />
                  </div>
                  <div className="category_name">
                    <h3>Tutorials</h3>
                  </div>
                </div>

                <div className="category_button">
                  <div className="button_icon"></div>
                  <div className="button_icon"></div>
                  <div className="button_icon"></div>
                </div>
              </NavLink>

              <NavLink to="/About" className="navigation_categories y_axis_center">
                <div className="category_icon_name y_axis_center">
                  <div className="category_icon y_axis_center">
                    <FcAbout className="icon" />
                  </div>
                  <div className="category_name">
                    <h3>About</h3>
                  </div>
                </div>

                <div className="category_button">
                  <div className="button_icon about_btn"></div>
                  <div className="button_icon about_btn"></div>
                  <div className="button_icon about_btn"></div>
                </div>
              </NavLink>

            </div>

            <div className="social_network_links">
              { socialNetData.map((getData) => {
                return <a href={getData.link} key={getData.id}><img src={getData.img} />{getData.name}</a>
              })}
            </div>
          </div>
        </div>

        <div className="logo">
          <NavLink to="/" className="x_y_axis_center">
            <img src={ReactIcon} alt="react logo" />
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default TopNav;


