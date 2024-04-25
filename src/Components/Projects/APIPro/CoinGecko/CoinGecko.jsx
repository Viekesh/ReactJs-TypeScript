import "./CoinGecko.scss";
import { NavLink, Outlet } from "react-router-dom";
import cryLogo from "../../../../Assets/Images/coingeckologo.webp";



const CoinGecko = () => {

    const toggleMobileMenu = () => {
        // setShowMenu(!showMenu);
        document.querySelector("body").classList.toggle("body-overflow-visible");
    };

    return (
        <>
            <section className="coin_gecko">

                <div className="crypto_nav_elements">
                    <div className="crypto_options logo_menu_icon y_axis_center">
                        <div className="crypto_logo">
                            <img src={cryLogo} alt="" />
                        </div>

                        <div className="crypto_menu_icon">
                            <div className="nav_icon y_axis_center">
                                <div className="menu_icon x_y_axis_center">
                                    <div className="only-mobile mobile-menu-button-wrapper">
                                        <button
                                            className={`hamburger hamburger--3dx x_y_axis_center`}
                                            type="button"
                                            onClick={toggleMobileMenu}
                                        >
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="crypto_options y_axis_center">
                        <NavLink to="Crypto">Crypto</NavLink>
                        <NavLink to="TrendingCrypto">Trending</NavLink>
                        <NavLink to="Saved">Saved</NavLink>
                    </div>
                </div>

                <Outlet />
            </section>
        </>
    )
}



export default CoinGecko;