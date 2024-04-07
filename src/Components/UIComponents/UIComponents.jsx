import "./UIComponents.css";
import SocialLinks from "../Featured/SocialLinks/SocialLinks";
import SuperTunes from "./SuperTunes/SuperTunes";
import WeatherPanel from "./WeatherCard/WeatherPanel";
import TextCount from "./TextCount/TextCount";
import UserPosts from "./UserPosts/UserPosts";
import StatefulHook from "./StatefulHook/StatefulHook";
import DraftJsEditor from "./ReactDraftWysiwyg/DraftJsEditor";
import JokeUI from "./RandomJokes/JokeUI";
import TimerUI from "../Tutorials/CompoRevi/ManagingCleanup/TimerUI";
import MouseEvents from "../Tutorials/CompoRevi/ManageEvents/MouseEvents";
import ControlledForm from "../Tutorials/BuildingForms/ControlledForm";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">

                <SocialLinks />

                <ControlledForm />
                <DraftJsEditor />
                <JokeUI />
                <MouseEvents />
                <StatefulHook />
                <SuperTunes />
                <TextCount />
                <TimerUI />
                <UserPosts />
                <WeatherPanel />

            </section >
        </>
    )
}



export default UIComponents;
