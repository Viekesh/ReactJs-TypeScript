import { NavLink } from "react-router-dom";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./BottomNav.scss";

const BottomNav = () => {

  return (
    <div className="bottom_navigation x_y_axis_center">
      <div className="for_smartphone">
        <div className="tech_icon x_y_axis_center">
          <NavLink to="/Blogs" className="x_y_axis_center">
            <RssFeedIcon />
          </NavLink>
        </div>
        <div className="blog_icon x_y_axis_center">
          <NavLink to="/Blog" className="x_y_axis_center">
            <AssignmentIcon />
          </NavLink>
        </div>
        <div className="profile_icon x_y_axis_center">
          <NavLink to="/SignIn" className="x_y_axis_center">
            <AccountCircleIcon />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default BottomNav;


