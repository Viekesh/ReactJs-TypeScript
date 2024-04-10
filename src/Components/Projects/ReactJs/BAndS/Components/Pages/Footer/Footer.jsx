import React from "react";
import FooterStyleSheet from "./Footer.module.css";
import Logo from "../../../Img/ec2logo.png";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
// import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
// import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
// import Face3SharpIcon from "@mui/icons-material/Face3Sharp";
// import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
// import PhonelinkRingSharpIcon from "@mui/icons-material/PhonelinkRingSharp";



const Footer = () => {
    return (
        <div className={FooterStyleSheet.footer_page}>
            <div className={FooterStyleSheet.footer_wrapper}>

                <div className={FooterStyleSheet.logo}>
                    <img src={Logo} alt="" />
                    <h1>Beauty And Spa</h1>
                </div>

                <div className={FooterStyleSheet.block}>
                    <div className={FooterStyleSheet.detail}>
                        <h1>Contact Us</h1>
                        <span className={FooterStyleSheet.png_line}>

                            <div className={FooterStyleSheet.location}>
                                <MyLocationOutlinedIcon />
                                <span>123, Lorem ipsum dolor sit amet consectetur.</span>
                            </div>

                            <div className={FooterStyleSheet.location}>
                            </div>

                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
