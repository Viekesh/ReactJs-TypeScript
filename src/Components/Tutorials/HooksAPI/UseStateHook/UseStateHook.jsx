import React, { useState } from "react";
import "./UseStateHook.css";
import Config from "./Components/Config";
import TagsBuilder from "./Components/TagsBuilder";



const UseStateHook = () => {

    const [scheduler, setScheduler] = useState(false);
    const [location, setLocation] = useState(false);
    const [tags, setTags] = useState([]);

    return (
        <>
            <div className="usestate_container">
                <Config
                    title="Use Scheduler"
                    toggleState={scheduler}
                    onToggle={v => setScheduler(v)}
                />

                <Config
                    title="Use Location"
                    toggleState={location}
                    onToggle={v => setLocation(v)}
                />

                <TagsBuilder
                    tags={tags}
                    addTags={value => setTags([...tags, { id: new Date().getTime(), title: value }])}
                />
            </div>
        </>
    )
};



export default UseStateHook;
