import BottomNav from "../Navigation/BottomNav";
import TopNav from "../Navigation/TopNav";
import SocialLinks from "../SocialLinks/SocialLinks";
import Greet from "./Greet";
import "./LandingPage.scss";

const LandingPage = () => {

  return (
    <>
      <header>
        <div className="background_img">
          <TopNav />
          <main>
            <Greet />
            <SocialLinks />
          </main>
          <BottomNav />
        </div>
      </header>
    </>
  );
};

export default LandingPage;



