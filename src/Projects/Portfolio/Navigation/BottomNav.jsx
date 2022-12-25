import { NavLink } from "react-router-dom";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./BottomNav.scss";

const BottomNav = () => {

  return (
    <div className="bottom_navigation x_y_axis_center">
      <div className="for_smartphone">
        <div className="tech_icon x_y_axis_center">
          <NavLink to="/Blogs" className="x_y_axis_center">
            <ArticleIcon />
          </NavLink>
        </div>
        <div className="blog_icon x_y_axis_center">
          <NavLink to="/Blog" className="x_y_axis_center">
            <DeveloperModeIcon />
          </NavLink>
        </div>
        <div className="profile_icon x_y_axis_center">
          <NavLink to="/Auth" className="x_y_axis_center">
            <AccountCircleIcon />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default BottomNav;


