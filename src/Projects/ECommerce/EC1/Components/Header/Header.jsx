import React from "react";
import css from "./Header.module.css";
// import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';



const Header = () => {
  return (
    <div className={css.Header}>
      <div className={css.container}>
        <div className={css.logo}></div>

        <div className={css.right}>
          
            <ul className={css.menu}>
              <li>Services</li>
              <li>Collections</li>
              <li>Book Appointment</li>
              <li>Offers</li>
              <li>About Us</li>
            </ul>

          {/* <input type="text" className={css.search} />

          <span>{<ShoppingBasketOutlinedIcon />}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
