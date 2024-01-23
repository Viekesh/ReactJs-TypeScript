import React from "react";
import Notification from "./Notification";
import TextCount from "./TextCount";
import UserPosts from "./UserPosts";
import ListElements from "./ListElements";
import LoginComponent from "./LoginComponent";
import ToggleButton from "./ToggleButton";
import StatefulHook from "./StatefulHook";
import ThemeSwitcher from "../Tutorials/StateAndProps/ThemeSwitcher";
import Props from "../Tutorials/StateAndProps/Props";
import PropCheck from "../Tutorials/StateAndProps/PropTypeCheck";
import RenderingList from "../Tutorials/RenderingLists/RenderingList";
import MovieCard from "../Tutorials/RenderingLists/MovieCard";
import SuperTunes from "./SuperTunes/SuperTunes";
// import ProductList from "../Tutorials/RenderingLists/ProductList";
// import BooksList from "./Books";



const UIComponents = () => {
    return (
        <>
            <section className="ui_components">
                <SuperTunes />
                <Notification text="Notification goes here..." />
                <TextCount />
                <UserPosts />
                <ListElements />
                <LoginComponent />
                <ToggleButton />
                <StatefulHook />
                <ThemeSwitcher />
                <Props />
                <PropCheck />
                <RenderingList />
                <MovieCard />
                {/* <ProductList /> */}
                {/* <BooksList /> */}
            </section>
        </>
    )
}



export default UIComponents;
