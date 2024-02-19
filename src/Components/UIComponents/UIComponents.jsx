import "./UIComponents.css";
import TextCount from "./TextCount";
import UserPosts from "./UserPosts";
import StatefulHook from "./StatefulHook";
import ThemeSwitcher from "../Tutorials/StateAndProps/ThemeSwitcher";
import RenderingList from "../Tutorials/RenderingLists/RenderingList";
import SuperTunes from "./SuperTunes/SuperTunes";
import TopNav from "../FeaturedComponents/Navigation/TopNav";
import SocialLinks from "../FeaturedComponents/SocialLinks/SocialLinks";
import Footer from "../PageComponents/LandingPage/Footer";
import MainContent from "../ServiceDB/MainContent";
import WeatherPanel from "./WeatherCard/WeatherPanel";
import ManageEvents from "../Tutorials/ManageEvents/ManageEvents";
// import UseRefHook from "../Tutorials/HooksAPI/UseRef/UseRefHook";



const UIComponents = () => {
    return (
        <>
            <TopNav />
            <section className="ui_components">

                <MainContent
                    heading="UI Components"
                    para="practice makes ouselves perfect!!! no... it's not encapsulate the entire equation but our consistent practice stayed us on track and helps to create new insights that's why I have daily practice code with react, sometimes it is a project or sometimes it's an UI components here you can see various UI components."
                />

                <SocialLinks />
                <SuperTunes />
                <TextCount />
                <UserPosts />
                <StatefulHook />
                <ThemeSwitcher />
                <RenderingList />
                <WeatherPanel />

                <ManageEvents />

                {/* Hooks */}
                {/* <UseRefHook /> */}
            </section >

            <footer>
                <Footer />
            </footer>
        </>
    )
}



export default UIComponents;
