import React from "react";
import ToggleButton from "./ToggleButton";



const Config = ({ title, toggleState, onToggle }) => {
    return (
        <>
            <div className="config_row">
                <div className="config_option">
                    {title} is <b>{toggleState ? "ON" : "OFF"}</b>
                </div>

                <div className="config_switch">
                    <ToggleButton init={toggleState} toggle={v => onToggle(v)} />
                </div>
            </div>
        </>
    )
};



export default Config;
