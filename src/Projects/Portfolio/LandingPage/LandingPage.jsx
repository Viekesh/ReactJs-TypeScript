import Slider from "../ApplicationLinks/Slider";
import BottomNav from "../Navigation/BottomNav";
import TopNav from "../Navigation/TopNav";
import SocialLinks from "../SocialLinks/SocialLinks";
import Greet from "./Greet";
import "./LandingPage.scss";
import SubHeading from "./SubHeading";

const LandingPage = () => {

  return (
    <>
      <header>
        <div className="background_img">
          <TopNav />
          <main>
            <Greet />
            <SocialLinks />
            <SubHeading heading = "Projects" />
            <Slider />
          </main>
          <BottomNav />
        </div>
      </header>
    </>
  );
};

export default LandingPage;



