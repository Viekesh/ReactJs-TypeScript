import "./UIComponents.css";
import TextCount from "./TextCount";
import UserPosts from "./UserPosts";
import StatefulHook from "./StatefulHook";
import ThemeSwitcher from "../Tutorials/StateAndProps/ThemeSwitcher";
import RenderingList from "../Tutorials/RenderingLists/RenderingList";
import SuperTunes from "./SuperTunes/SuperTunes";
import TopNav from "../FeaturedComponents/Navigation/TopNav";
import ContentLandingPage from "../PageComponents/LandingPage/ContentLandingPage";
import SocialLinks from "../FeaturedComponents/SocialLinks/SocialLinks";
import Footer from "../PageComponents/LandingPage/Footer";



const UIComponents = () => {
    return (
        <>
            <TopNav />
            <section className="ui_components">

                <ContentLandingPage
                    heading="UI Components"
                    para="here you can see various UI components. For the code lets check my github repo."
                />

                <SocialLinks />
                <SuperTunes />
                <TextCount />
                <UserPosts />
                <StatefulHook />
                <ThemeSwitcher />
                <RenderingList />
            </section >

            <footer>
                <Footer />
            </footer>
        </>
    )
}



export default UIComponents;
