import React from "react";
import TextCount from "./TextCount";
import UserPosts from "./UserPosts";
import StatefulHook from "./StatefulHook";
import ThemeSwitcher from "../Tutorials/StateAndProps/ThemeSwitcher";
import RenderingList from "../Tutorials/RenderingLists/RenderingList";
import SuperTunes from "./SuperTunes/SuperTunes";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">
                <SuperTunes />
                <TextCount />
                <UserPosts />
                <StatefulHook />
                <ThemeSwitcher />
                <RenderingList />
            </section>
        </>
    )
}



export default UIComponents;
