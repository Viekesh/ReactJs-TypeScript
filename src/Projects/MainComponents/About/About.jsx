import React from "react";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import "./About.scss";

const About = () => {
  return (
    <>
      <TopNavigation />
      <PortfolioLinks />
      <BottomNavigation />
      <div className="about">
        <div className="page_heading">
          <h3>about</h3>
        </div>

        <div className="page_info about_page_info">
          <h3>hi there,</h3>
          <h3>
            first thank you for reached out here and for giving me your precious time.
          </h3>
          <h3>
            I am Vikesh Gaikwad, theoretically an electrical engineer and practically a full stack
            developer, means I am developed the websites and application. This is not the part of my college
            curriculum but after the ending phase of pandemic my interest was increases in coding
            and I am started learning coding languages. I haven't done any internship in web
            development yet so far but I like to keep trying things on my own like creating websites
            for different scenarios.
          </h3>
          <h3>
            Now I am looking an opportunities to work with the professionals, check out my portfolio
            if you think i can do something for you then contact me we will definitely do something 
            good together.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
