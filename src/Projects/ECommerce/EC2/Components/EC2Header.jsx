import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EC2Logo from "../EC2Images/ec2logo.png";
import "../Styles/EC2Header.scss";

const EC2Header = () => {
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

  const menuLinkLocation = useLocation();
  // the useLocation hook returns the location object that represent the current url, you think about it like
  // a useState that returns a new location whenever the url changes

  console.log(menuLinkLocation.pathname);

  // we can use this navigate to navigate between our website, this is the fast routing that react gives us
  // without refreshing the page we can go between routes
  const ec2Navigate = useNavigate();

  // we add "pathMathchRoute" function and we just say if the path, if the "route" is equal to the forward slash
  const pathMatchRoute = (route) => {
    if (route === menuLinkLocation.pathname) {
      return true;
    }
  };

  return (
    <div className="ec2_header">
      <div className="ec2_for_desktop">
        <div className="ec2_logo x_y_axis_center">
          <img
            src={EC2Logo}
            alt="logo"
            onClick={() => ec2Navigate("/EC2LandingPage")}
          />
        </div>

        <div className="ec2_menu">
          <ul>
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
              className={` ${pathMatchRoute("/EC2LandingPage") && "home_link"}`}
              onClick={() => ec2Navigate("/EC2LandingPage")}
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
              className={` ${(pathMatchRoute("/SignIn") || pathMatchRoute("/Profile")) &&
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
  );
};

export default EC2Header;


