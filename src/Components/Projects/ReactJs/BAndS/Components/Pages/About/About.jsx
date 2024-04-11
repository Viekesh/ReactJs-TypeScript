import { AboutCon } from "../../../ServiceDB/AboutContent";
import CPaths from "../../Featured/ComponentPaths/CPaths";
import MainHeading from "../../Featured/Headings/MainHeading/MainHeading";
import SubHead from "../../Featured/Headings/SubHeadings/SubHeading";
import TopNav from "../../Featured/Navigation/TopNav";
import SocialLinks from "../../Featured/SocialLinks/SocialLinks";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import "./About.css";




const BAndSAbout = () => {
    return (
        <>
            <section className="about">
                <TopNav />
                <SocialLinks />
                <MainHeading headingTitle="About" />
                <CPaths p1="Home" dest="About" />

                <div className="about_content">
                    {
                        AboutCon.map((data) => {
                            return (
                                <>
                                    <p>{data.contentOne}</p>
                                    <p>{data.contentTwo}</p>
                                </>
                            )
                        })
                    }
                </div>

                <SubHead headTitle="Our Team:" />
                <Testimonial />

                <div className="about_content">
                    {
                        AboutCon.map((data) => {
                            return (
                                <>
                                    <p>{data.contentThree}</p>
                                    <p>{data.contentFour}</p>
                                </>
                            )
                        })
                    }
                </div>

                <Footer />
            </section>
        </>
    )
}



export default BAndSAbout;