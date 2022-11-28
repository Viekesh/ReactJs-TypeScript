import React from "react";
import css from "./Header.module.css";
// import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Header = () => {
  return (
    <>
      <div className="for_d">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
