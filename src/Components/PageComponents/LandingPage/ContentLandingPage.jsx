import React from "react";
import "./ContentLandingPage.css";



const ContentLandingPage = ({ heading, para }) => {
    return (
        <>
            <div className="content_landing_page">
                <h1>{heading}</h1>
                <br />
                <p>{para}</p>
            </div>
        </>
    )
}



export default ContentLandingPage;
