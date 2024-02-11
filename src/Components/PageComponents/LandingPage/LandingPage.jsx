import React from "react";
import "./LandingPage.css";
import TopNav from "../../FeaturedComponents/Navigation/TopNav";
import { LandingPageContent } from "./ContentDB";
import ContentLandingPage from "./ContentLandingPage";
import ReactJsPro from "../ReactJsPro/ReactJsPro";
import SocialLinks from "../../FeaturedComponents/SocialLinks/SocialLinks";



const LandingPage = () => {
    return (
        <>
            <header className="nav_component">
                <TopNav />
            </header>

            <main>
                {
                    LandingPageContent.map(c => (
                        <ContentLandingPage heading={c.heading} para={c.para} />
                    ))
                }

                <div className="for_desktop_view">
                    this portfolio is developed for mobile view only. please checks it in mobile...
                </div>

                <section className="react_projects">
                    <ReactJsPro />
                </section>

                <SocialLinks />
            </main>

            <footer></footer>
        </>
    )
}



export default LandingPage;








// import React from "react";
// import "./LandingPage.css";
// import TopNav from "../../FeaturedComponents/Navigation/TopNav";
// import ContentLandingPage from "./ContentLandingPage";
// import Content from "../ContentDB/ContentDB";



// const LandingPage = () => {
//     return (
//         <>
//             <div className="landing_page">
//                 <TopNav />
//                 {
//                     Content.map(({ landingPage }) => {
//                         return (
//                             <ContentLandingPage
//                                 landingPage={landingPage}
//                             />
//                         )
//                     })
//                 }
//             </div>
//         </>
//     );
// };

// export default LandingPage;

// import React from "react";
// import "./LandingPage.css";
// import Typewriter from "typewriter-effect";
// import { FcDownload } from "react-icons/fc";
// import Resume from "../../Assets/Docs/Resume.txt";

// const LandingPage = () => {
//   return (
//     <>
//       <div className="container_fluid home_container">
//         <div className="home_content">
//           <h1>Hi, I'm a</h1>
//           <h2 className="home_content">
//             <Typewriter
//               options={{
//                 strings: ["Full Stack Engineer", "With React Native"],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </h2>

//           <div className="home_buttons">
//             <button className="btn btn_hire">Hire Me</button>
//             <a href={Resume} download="Resume.txt" className="btn btn_cv">
//               <FcDownload /> Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;
