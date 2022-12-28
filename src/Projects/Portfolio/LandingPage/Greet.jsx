import React from "react";

// Text animation for mobile start

const heading1 = () => {
  document.getElementById("heading1").style.left = "0";
  const display = () => {
    document.getElementById("heading1").style.opacity = 1;
  };
  display();
};

const heading2 = () => {
  document.getElementById("heading2").style.top = 18 + "vw";
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

const heading3 = () => {
  document.getElementById("heading3").style.left = "0";
  const display = () => {
    document.getElementById("heading3").style.opacity = 1;
  };
  display();
};

// const heading4 = () => {
//   document.getElementById("heading4").style.top = 3 + "vw";
//   const display = () => {
//     document.getElementById("heading4").style.opacity = 1;
//   };
//   display();
// };

const headingTimeD = () => {
  setTimeout(heading3, 900);
  // setTimeout(heading4, 2500);
};

// Text animaion for desktop end

const textAnime = () => {
  headingTime();
  headingTimeD();
};

const Greet = () => {
  return (
    <div className="landing_page" onLoad={textAnime()}>
      <div className="greet">
        <div className="for_smartphones">
          <h3 className="heading1" id="heading1">
            hello, welcome here
            <br />
            is there anything i can help you with today
          </h3>
          <h3 className="heading2" id="heading2"></h3>
          <h1 className="instruction">
            work on web application and mobile development. checkout my github
            profile and projects.
          </h1>
        </div>

        <div className="for_desktops">
          <h3 className="heading3" id="heading3">
            hello, welcome here
            <br />
            is there anything i can help you with today
          </h3>
          {/* <h3 className="heading4" id="heading4">
            by adopting digital emerging technologies
          </h3> */}
          <h1 className="instruction">
            work on web application and mobile development. go around, check the entire porfolio
            if you need any assistance then contact me.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Greet;
