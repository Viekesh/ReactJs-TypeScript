import "./UIComponents.css";
import SocialLinks from "../Featured/SocialLinks/SocialLinks";
import SuperTunes from "./SuperTunes/SuperTunes";
import WeatherPanel from "./WeatherCard/WeatherPanel";
import TextCount from "./TextCount/TextCount";
import UserPosts from "./UserPosts/UserPosts";
import StatefulHook from "./StatefulHook/StatefulHook";
import DraftJsEditor from "./ReactDraftWysiwyg/DraftJsEditor";
import JokeUI from "./RandomJokes/JokeUI";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">

                <SocialLinks />

                <DraftJsEditor />
                <JokeUI />
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
