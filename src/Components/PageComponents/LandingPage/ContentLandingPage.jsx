import React from "react";
import "./ContentLandingPage.css";



const ContentLandingPage = ({ heading, para }) => {

    const textAnimate = () => {
        document.getElementById("landingPageHeading").style.marginLeft = 0 + "px";
        document.getElementById("landingPagePara").style.padding = 0 + "px";

        const display = () => {
            document.getElementById("landingPageHeading").style.opacity = 1;
            document.getElementById("landingPagePara").style.opacity = 1;
        }

        display();
    }

    const animateDelay = () => {
        setTimeout(textAnimate, 2000);
    }

    return (
        <>
            <div className="content_landing_page" onLoad={animateDelay()}>
                <h1 id="landingPageHeading">{heading}</h1>
                <br />
                <p id="landingPagePara">{para}</p>
            </div>
        </>
    )
}



export default ContentLandingPage;
