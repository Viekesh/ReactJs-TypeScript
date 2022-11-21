import Navigation from "./Navigation";
import "../Styles/LandingPage.css";
import PortfolioLinks from "./PortfolioLinks";
// import Tuts from '../../../Tuts/Tuts';



// Text animation for mobile start

const heading1 = () => {

  document.getElementById("heading1").style.left = "0";
  const display = () => {
    document.getElementById("heading1").style.opacity = 1;
  }
  display();

}

const heading2 = () => {

  document.getElementById("heading2").style.top = 21 + "vw";
  const display = () => {
    document.getElementById("heading2").style.opacity = 1;
  }
  display();

}

const headingTime = () => {
  setTimeout(heading1, 1000);
  setTimeout(heading2, 2500);
}

// Text animation for mobile end

// Text animation for desktop start

const heading3 = () => {

  document.getElementById("heading3").style.left = "0";
  const display = () => {
    document.getElementById("heading3").style.opacity = 1;
  }
  display();

}

const heading4 = () => {

  document.getElementById("heading4").style.top = 3 + "vw";
  const display = () => {
    document.getElementById("heading4").style.opacity = 1;
  }
  display();

}

const headingTimeD = () => {
  setTimeout(heading3, 900);
  setTimeout(heading4, 2500);
}

// Text animaion for desktop end

const textAnime = () => {
  headingTime();
  headingTimeD();
}



const LandingPage = () => {
  return (
    <div className="landing_page" onLoad={textAnime()}>
      <Navigation />
      {/* <Tuts /> */}
      <PortfolioLinks />

      <div className="greet">

        <div className="for_smartphones">
          <h3 className="heading1" id="heading1">
            give wings to your business
          </h3>
          <h3 className="heading2" id="heading2">
            by adopting digital emerging technologies
          </h3>
          <p className="instruction">
            check the entire portfolio or hit the call now for getting more
            details
          </p>
        </div>

        <div className="for_desktops">
          <h3 className="heading3" id="heading3">
            give wings to your business
          </h3>
          <h3 className="heading4" id="heading4">
            by adopting digital emerging technologies
          </h3>
          <p className="instruction">
            check the entire portfolio or hit the call now for getting more
            details
          </p>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
