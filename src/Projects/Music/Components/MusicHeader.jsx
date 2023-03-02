import React from "react";
import { musicGalleryImages } from "../Data/MusicGalleryData";
import MusicNav from "./Navigation/MusicNav";
import "./MusicHeader.scss";
import MGSlider from "./MusicGallery/MGSlider";



// image

// const img = () => {
//   document.getElementById("img1").style.opacity = 1;
//   const display1 = () => {
//     document.getElementById("img1").style.bottom = 5.3 + "em";
//   };
//   display1();
// };

// const musiccircle = () => {

//   document.getElementById("mcircle").style.opacity = 1;

//   const display2 = () => {
//     document.getElementById("mcircle").style.bottom = 8 + "em";
//   };

//   display2();
// }

// const mhead = () => {

//   const display3 = () => {
//     document.getElementById("mschead1").style.opacity = 1;
//     document.getElementById("mschead1").style.left = .4 + "em";
//   };

//   const display4 = () => {
//     document.getElementById("mschead2").style.opacity = 1;
//     document.getElementById("mschead2").style.left = .4 + "em";
//   };

//   display3();
//   display4();
// }

// const musicanime = () => {
//   setTimeout(musiccircle, 600);
//   setTimeout(img, 900);
//   setTimeout(mhead, 3000);
// };



// headings
// const mhead1 = () => {
//   document.getElementById("mschead1").style.left = .6 + "em";
//   const display3 = () => {
//     document.getElementById("mschead1").style.opacity = 1;
//   };
//   display3();
// };

// const mhead2 = () => {
//   document.getElementById("musichead2").style.opacity = 1;
//   const display4 = () => {
//     document.getElementById("musichead2").style.bottom = 8 + "em";
//   };
//   display4();
// }

// const mhead = () => {
//   setTimeout(mhead1, 1000);
//   setTimeout(mhead2, 1200);
// };



const MusicHeader = () => {
  return (
    <>

      <div className="music_header">
        <MusicNav />
      </div>

      <div className="music_background">
        <MGSlider images = {musicGalleryImages} />
      </div>

      {/* <div className="music_gallery">
        <MGSlider />
      </div> */}

      {/* <div className="section_1" onLoad={musicanime}>

        <div className="music_for_mob">
          <img src={img1} alt="guitar img" id="img1" />
          <div className="landing_page_circle" id="mcircle"></div>
        </div>

      </div>

      <div className="section_2">

        <div className="music_head">
          <h1 id="mschead1" className="musichead1">want to become an expert</h1>
          <h1 id="mschead2" className="musichead2">as a guitarist</h1>
        </div>

      </div> */}

    </>
  );
};

export default MusicHeader;


