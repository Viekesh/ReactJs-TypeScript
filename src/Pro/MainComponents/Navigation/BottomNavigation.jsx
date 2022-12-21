import "./BottomNavigation.scss";
// import { GrTechnology } from "react-icons/gr";
// import { FaBlog } from "react-icons/fa";
// import { RiAccountPinCircleFill } from "react-icons/ri";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";



const tech = {color : "snow"};

const BottomNavigation = () => {
  return (
    <div className="bottom_navigation x_y_axis_center">
      <div className="for_smartphone">
        <div className="tech_icon x_y_axis_center">
          <NavLink to="/TechStack" className="x_y_axis_center">
            <SyncAltIcon />
          </NavLink>
        </div>
        <div className="blog_icon x_y_axis_center">
          <NavLink to="/Blog" className="x_y_axis_center">
            <BookIcon />
          </NavLink>
        </div>
        <div className="profile_icon x_y_axis_center">
          <NavLink to="/SignIn" className="x_y_axis_center">
            <AccountCircleIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
