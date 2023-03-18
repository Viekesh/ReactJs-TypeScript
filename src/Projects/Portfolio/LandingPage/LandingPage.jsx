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
          <TopNav />
          <BottomNav />
      </header>

      <main>
        <Greet />
        <SocialLinks />

        {/* we use below ReactJs props, props is a properties and it is a way of passing data from parent
            component to child component */}
        <SubHeading heading="Projects" />
        <Slider />
      </main>
    </>
  );
};

export default LandingPage;



