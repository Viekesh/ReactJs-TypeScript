import React from "react";
import HeroStylesheet from "./Hero.module.css";
import HeroImg from "../../Images/hero.png";

// Text animation for mobile start

const heading1 = () => {
  document.getElementById("text1").style.left = "0";
  const display = () => {
    document.getElementById("text1").style.opacity = 1;
  };
  display();
};

const heading2 = () => {
  document.getElementById("text2").style.top = 12 + "vw";
  const display = () => {
    document.getElementById("text2").style.opacity = 1;
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
  document.getElementById("text3").style.left = "0";
  const display = () => {
    document.getElementById("text3").style.opacity = 1;
  };
  display();
};

const heading4 = () => {
  document.getElementById("text4").style.top = 3 + "vw";
  const display = () => {
    document.getElementById("text4").style.opacity = 1;
  };
  display();
};

const headingTimeD = () => {
  setTimeout(heading3, 1000);
  setTimeout(heading4, 2500);
};

// Text animaion for desktop end

const textHead = () => {
  headingTime();
  headingTimeD();
};

const Hero = () => {
  return (
    <div className={HeroStylesheet.hero} onLoad={textHead()}>
      <div className={HeroStylesheet.right_side}>
        <div className={HeroStylesheet.for_smartdevices}>
          <h3 className={HeroStylesheet.text1} id="text1">
            Find Your Style
          </h3>
          <h3 className={HeroStylesheet.text2} id="text2">
            Lorem ipsum dolor sit amet
          </h3>
        </div>

        <div className={HeroStylesheet.for_desk}>
          <h3 className={HeroStylesheet.text3} id="text3">
            Find Your Style
          </h3>
          <h3 className={HeroStylesheet.text4} id="text4">
            Lorem ipsum dolor sit amet
          </h3>
        </div>
      </div>

      <div className={HeroStylesheet.wrapper}>
        <div className={HeroStylesheet.pinkCircle}></div>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
