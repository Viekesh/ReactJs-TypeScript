import TopNav from "../../Featured/Navigation/TopNav";
import SocialLinks from "../../Featured/SocialLinks/SocialLinks";
import { LandingPageContent } from "../../ServiceDB/ServiceDB";
import UIComponents from "../../UIComponents/UIComponents";
import Heading from "../Heading/Heading";
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
                    LandingPageContent.map((data) => {
                        return (
                            <>
                                <div className="content_page" onLoad={animateDelay()}>
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
            </header>

            <main>
                <Heading head="UI-Components:" />
                <UIComponents />

                <Heading head="Projects:" />
            </main>
        </>
    )
}



export default Landing;