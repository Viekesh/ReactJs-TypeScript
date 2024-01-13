import React from "react";
import { NavLink } from "react-router-dom";
import ComponentsDB from "./ComponentsDB";
import Notification from "./Notification";
import TextCount from "./TextCount";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">
                <Notification text="Notification goes here..." />
                <TextCount />
            </section>
        </>
    )
}



export default UIComponents;