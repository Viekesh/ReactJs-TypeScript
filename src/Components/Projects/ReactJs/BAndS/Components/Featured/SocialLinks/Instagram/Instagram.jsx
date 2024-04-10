import "./InstagramLink.css";
import instagirl from "../../../../Img/instagirl-removebg-preview.png";
import { FaInstagram } from "react-icons/fa";


const Instagram = () => {
    return (
        <>
            <section className="instagram_link y_axis_center">
                <a href="https://www.instagram.com/aniket_kuttarmare/" className="x_axis_center">
                    <FaInstagram />
                </a>

                <div className="img">
                    <img src={instagirl} alt="" />
                </div>
            </section>
        </>
    )
}



export default Instagram;