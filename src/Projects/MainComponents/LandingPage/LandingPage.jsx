import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavigation from "../Navigation/TopNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";
import HeadContent from "./HeadContent";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <header>
        <TopNavigation />
        <main>
          <HeadContent />
        </main>
        <PortfolioLinks />
        <BottomNavigation />
      </header>
    </>
  );
};

export default LandingPage;

// <section> tag means that the content inside relates to a single theme,
// and <div> tag is used as a block part of the webpage and don't convey any particular meaning

// The <main> tag specifies the main content of a document.
// The content inside the <main> element should be unique to the document.
// It should not contain any content that is repeated across documents such as sidebars, navigation links,
// copyright information, site logos, and search forms.
