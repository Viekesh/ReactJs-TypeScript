import BottomNav from "../Navigation/BottomNav";
import TopNav from "../Navigation/TopNav";
import HeadContent from "./HeadContent";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <header>
        <TopNav />
        <main>
          <HeadContent />
        </main>
        <BottomNav />
      </header>
    </>
  )
}

export default LandingPage;


