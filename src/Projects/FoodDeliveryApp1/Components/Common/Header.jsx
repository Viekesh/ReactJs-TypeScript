import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import "../../Styles/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header y_axis_center">
    
      <div className="logo_food_delivery"></div>

      <div className="search_elements x_y_axis_center">

            <div className="location_for_mobile y_axis_center">
              <LocationSearchingIcon sx={{ fontSize: "30px", color: "rgb(100, 100, 100)" }} />
            </div>

            <div className="location_for_desktop y_axis_center">
              <LocationSearchingIcon sx={{ fontSize: "30px", color: "rgb(100, 100, 100)" }} />
              <input type="search" placeholder="Enter The Location" className='inputs' />
            </div>

            <div className="search y_axis_center">
              <input type="search" placeholder="Search Food" className='inputs' />
              <SearchIcon sx={{fontSize: "30px", color: "rgb(100, 100, 100)"}} />
            </div>

      </div>

      <div className="account y_axis_center">
        <div className="y_axis_center">
          <NavLink to="/LogIn" className="y_axis_center log_in">
            <AccountCircleIcon sx={{ fontSize: "30px", color: "rgb(100, 100, 100)" }} />
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Header;
