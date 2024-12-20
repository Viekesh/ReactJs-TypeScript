import Counter from "../../../Redux/Ex/Counter";
import TopNav from "../../Featured/Navigation/TopNav";
import SocialLinks from "../../Featured/SocialLinks/SocialLinks";
import MiniPro from "../../Projects/MiniPro/MiniPro";
import OngoingPro from "../../Projects/OngoingProjects/OngoingPro";
import { LandingPageContent } from "../../ServiceDB/ServiceDB";
// import UIComponents from "../../UIComponents/UIComponents";
// import Assignments from "../Assignments/Assignments";
import Heading from "../Heading/Heading";
import Footer from "./Footer";
import "./Landing.scss";



const Landing = () => {

    const textAnimate = () => {
        document.getElementById("PageHeading").style.marginLeft = 0 + "px";
        document.getElementById("PagePara").style.padding = 0 + "px";

        const display = () => {
            document.getElementById("PageHeading").style.opacity = 1;
            document.getElementById("PagePara").style.opacity = 1;
        }

        display();
    }

    const animateDelay = () => {
        setTimeout(textAnimate, 2000);
    }

    return (
        <>
            <header>
                <TopNav />
                <SocialLinks />

                {
                    LandingPageContent.map((data, index) => {
                        return (
                            <>
                                <div className="head_content" onLoad={animateDelay()} key={index}>
                                    <h1 id="PageHeading" className="lexend">{data.heading}</h1>
                                    <br />
                                    <p id="PagePara" className="lexend">{data.para}</p>
                                </div>
                            </>
                        )
                    })
                }

                <div className="for_desktop_view">
                    this portfolio is developed for mobile view only. please checks it in mobile...
                </div>

                <Heading head="Get In Touch:" />
            </header>

            <main>
                <Heading head="Mini Projects :" />
                <MiniPro />

                {/* <Heading head="Featured-Components:" />
                <UIComponents /> */}

                <Heading head="ongoing Projects:" />
                {/* <Assignments /> */}
                <OngoingPro />
            </main>

            <footer>
                <Counter />
                <Footer />
            </footer>
        </>
    )
}



export default Landing;