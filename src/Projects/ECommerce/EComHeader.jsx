import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./EComHeader.scss";

const EComHeader = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };



  const [pageState, setPageState] = useState("SignIn");

  const auth = getAuth();

  // here we use the "useEffect" to check the changes of "auth"
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("SignIn");
      }

      if (user) {
        document.getElementById("list").innerHTML = "Create List";
      }
    });
  }, [auth]);

  const ec2Navigate = useNavigate();

  const menuLinkLocation = useLocation();
  // the useLocation hook returns the location object that represent the current url, you think about it like
  // a useState that returns a new location whenever the url changes

  console.log(menuLinkLocation.pathname);

  // we add "pathMathchRoute" function and we just say if the path, if the "route" is equal to the forward slash
  const pathMatchRoute = (route) => {
    if (route === menuLinkLocation.pathname) {
      return true;
    }
  };

  return (
    <div className="e_com_header x_y_axis_center">
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

          <div className="e_com_logo">
            <NavLink to="/" className="x_y_axis_center">
              {/* <img src={ReactIcon} alt="react logo" /> */}
            </NavLink>
          </div>

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
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>

          <div
            className={`navigation_section navigation_style ${showMenu ? "overlay" : ""}`}
            id="Navigation"
          >
            <ul className="e_com_menu">
            {/* we add "pathMathchRoute" function and we just say if the path, if the "route" is equal to the forward slash */}

            {/* if you click any of the below link, then we want to navigate it to the associated link */}
            {/* "react-router-dom" is giving us this ability as well, by using "useNavigate" function */}
            {/* we can use "useNavigate" function to navigate inside the website */}
            <Link to="/CreateForm">
              <li
                className={` ${pathMatchRoute("/CreateForm") && "home_link"
                  }`}
                id="list"
              ></li>
            </Link>
            <li
              className={` ${pathMatchRoute("/EComHeader") && "home_link"}`}
              onClick={() => ec2Navigate("/EComHeader")}
            >
              Home
            </li>
            <li
              className={` ${pathMatchRoute("/Offers") && "home_link"}`}
              onClick={() => ec2Navigate("/Offers")}
            >
              Offers
            </li>
            <li
              className={` ${(pathMatchRoute("/Auth") || pathMatchRoute("/Profile")) &&
                "home_link"
                }`}
              onClick={() => ec2Navigate("/Profile")}
            >
              {pageState}
            </li>
          </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EComHeader;