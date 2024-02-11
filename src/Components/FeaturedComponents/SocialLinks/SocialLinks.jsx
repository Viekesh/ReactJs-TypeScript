import "./SocialLinks.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";



const SocialLinks = () => {

    const [mailIconPosition, setMailIconPosition] = useState(12);

    const [whatsappIconPos, setWhatsAppIconPos] = useState(12);

    const [linkedInIconPos, setLinkedInIconPos] = useState(12);

    const whatsapp = {
        bottom: whatsappIconPos + "vh",
    };

    const mail = {
        bottom: mailIconPosition + "vh",
    }

    const linkedIn = {
        bottom: linkedInIconPos + "vh",
    }

    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
        return (
            () => {
                window.removeEventListener("scroll", HandleScroll);
            }
        )
    }, []);

    const HandleScroll = () => {

        if (window.scrollY > 3) {
            setWhatsAppIconPos(41);
            setMailIconPosition(32);
            setLinkedInIconPos(23)
        } else {
            setWhatsAppIconPos(12);
            setMailIconPosition(12);
            setLinkedInIconPos(12);
        }

    };

    return (
        <>
            <div className="portfolio_links x_y_axis_center">

                <div style={whatsapp} id="Mail" className="whatsapp x_y_axis_center">
                    <a href="https://wa.me/+917620174776/?text=Hello! I want to know about" className="x_y_axis_center">
                        <IoLogoWhatsapp />
                    </a>
                </div>

                <div style={mail} id="Mail" className="mail x_y_axis_center">
                    <a href="mailto:vikesh.g99@gmail.com" className="x_y_axis_center">
                        <BiLogoGmail />
                    </a>
                </div>

                <div style={linkedIn} id="linkedIn" className="linked_in x_y_axis_center">
                    <a href="https://www.linkedin.com/in/vikesh-gayakwad-994872194" className="x_y_axis_center">
                        <FaLinkedinIn />
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