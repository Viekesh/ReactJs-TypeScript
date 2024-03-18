import React from "react";
import "./Greet.scss";

// Text animation for mobile start

const heading1 = () => {
  document.getElementById("heading1").style.left = "0";
  const display = () => {
    document.getElementById("heading1").style.opacity = 1;
  };
  display();
};

const heading2 = () => {
  document.getElementById("heading2").style.bottom = -3 + "vw";
  const display = () => {
    document.getElementById("heading2").style.opacity = 1;
  };
  display();
};

const headingTime = () => {
  setTimeout(heading1, 1000);
  setTimeout(heading2, 2500);
};

// Text animation for mobile end

// Text animation for desktop start

// const heading3 = () => {
//   document.getElementById("heading3").style.left = "0";
//   const display = () => {
//     document.getElementById("heading3").style.opacity = 1;
//   };
//   display();
// };

// const heading4 = () => {
//   document.getElementById("heading4").style.top = 3 + "vw";
//   const display = () => {
//     document.getElementById("heading4").style.opacity = 1;
//   };
//   display();
// };

// const headingTimeD = () => {
//   setTimeout(heading3, 900);
//   setTimeout(heading4, 2500);
// };

// Text animaion for desktop end

const textAnime = () => {
  headingTime();
  // headingTimeD();
};

const Greet = () => {
  return (
    <div className="greet">

      <div className="for_mobile_device x_axis_center">

        <h1 className="heading1" id="heading1" onLoad={textAnime()}>
          want to build featured, stunning, secured web and mobile applications!!!
        </h1>
        <h2 className="heading2" id="heading2" onLoad={textAnime()}>
          what it takes to become a consistently profitable entrepreneur by using digital emerging technologies...?
        </h2>

      </div>

    </div>
  );
};

export default Greet;


