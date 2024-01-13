import React from "react";
import Notification from "./Notification";
import TextCount from "./TextCount";
import UserPosts from "./UserPosts";
import ListElements from "./ListElements";
import LoginComponent from "./LoginComponent";
// import BooksList from "./Books";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">
                <Notification text="Notification goes here..." />
                <TextCount />
                <UserPosts />
                <ListElements />
                <LoginComponent />
                {/* <BooksList /> */}
            </section>
        </>
    )
}



export default UIComponents;