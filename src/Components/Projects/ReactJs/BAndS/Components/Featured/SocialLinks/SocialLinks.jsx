import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import "./SocialLinks.css";



const SocialLinks = () => {


    return (
        <>
            <div className="portfolio_links x_y_axis_center">

                <div id="Mail" className="whatsapp x_y_axis_center">
                    <a href="https://wa.me/+919766940948/?text=Hello!" className="x_y_axis_center">
                        <IoLogoWhatsapp />
                    </a>
                </div>

                <div id="Mail" className="mail x_y_axis_center">
                    <a href="mailto:vikesh.g99@gmail.com" className="x_y_axis_center">
                        <BiLogoGmail />
                    </a>
                </div>

                <div className="call_animate x_y_axis_center">
                    <a href="tel:+917620174776" className="links call x_y_axis_center">
                        <BiSolidPhoneCall />
                    </a>
                </div>

            </div>
        </>
    )
}



export default SocialLinks;