import PageHeading from "../../Components/PageHeading/PageHeading";
import BottomNav from "../Navigation/BottomNav";
import TopNav from "../Navigation/TopNav";
import "./About.scss";

const About = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="about">
        <PageHeading heading="About" />

        <div className="about_page_info">
          <br />
          <br />
          <h3>hi there,</h3>
          <br />
          <h3>
            first thank you for reached out here and for giving me your precious time.
          </h3>
          <br />
          <h3>
            I am Vikesh Gaikwad, theoretically an electrical engineer and practically a full stack
            developer, means I am developed the websites and application. This is not the part of my college
            curriculum but after the ending phase of pandemic my interest was increases in coding
            and I am started learning coding languages. I haven't done any internship in web
            development yet so far but I like to keep trying things on my own like creating websites
            for different scenarios.
          </h3>
          <br />
          <h3>
            Now I am looking an opportunities to work with the professionals, check out my portfolio
            if you think i can do something for you then contact me we will definitely do something
            good together.
          </h3>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default About;


