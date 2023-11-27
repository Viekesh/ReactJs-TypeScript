import React from "react";
import "./ContentLandingPage.css";



const ContentLandingPage = ({ landingPage }) => {
    return (
        <>
            <div className="content_landing_page x_y_axis_center">
                <h1>{landingPage}</h1>
            </div>
        </>
    )
}

export default ContentLandingPage;