import "./UIComponents.css";
import SocialLinks from "../Featured/SocialLinks/SocialLinks";
import SuperTunes from "./SuperTunes/SuperTunes";
import WeatherPanel from "./WeatherCard/WeatherPanel";
import TextCount from "./TextCount/TextCount";
import UserPosts from "./UserPosts/UserPosts";
import StatefulHook from "./StatefulHook/StatefulHook";
import DraftJsEditor from "./ReactDraftWysiwyg/DraftJsEditor";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">

                <SocialLinks />

                <DraftJsEditor />
                <StatefulHook />
                <SuperTunes />
                <TextCount />
                <UserPosts />
                <WeatherPanel />

            </section >
        </>
    )
}



export default UIComponents;
