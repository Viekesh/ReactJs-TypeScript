
import { NavLink } from "react-router-dom";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./BottomNav.scss";
import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

const BottomNav = () => {

  const [userName, setUsersName] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUsersName(authUser)
      } else {
        setUsersName(null);
      }
    })
  })

  const userId = userName?.uid;

  console.log("userId", userId);

  return (
    <div className="bottom_navigation x_y_axis_center">
      <div className="for_smartphone">
        <div className="tech_icon x_y_axis_center">
          <NavLink to="/Blogs" className="x_y_axis_center">
            <ArticleIcon />
          </NavLink>
        </div>
        <div className="blog_icon x_y_axis_center">
          <NavLink to="/Projects" className="x_y_axis_center">
            <DeveloperModeIcon />
          </NavLink>
        </div>
        <div className="profile_icon x_y_axis_center">
          {userId ? (
            <NavLink to="/Profile" className="x_y_axis_center">
              <AccountCircleIcon />
            </NavLink>
          ) : (
            <NavLink to="/Auth" className="x_y_axis_center">
              <AccountCircleIcon />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default BottomNav;


