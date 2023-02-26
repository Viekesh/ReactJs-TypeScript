import React from "react";
import MusicNav from "./Navigation/MusicNav";
import "./MusicHeader.scss";
import img1 from "../Images/myproject.png";

const MusicHeader = () => {
  return (
    <>
      <div className="music_header">
        <MusicNav />
      </div>

      <div className="section_1">
        <div className="music_for_mob">
          <img src={img1} alt="guitar img" />
          <div className="landing_page_circle"></div>
        </div>
        <div className="music_for_desk"></div>
      </div>

    </>
  );
};

export default MusicHeader;
