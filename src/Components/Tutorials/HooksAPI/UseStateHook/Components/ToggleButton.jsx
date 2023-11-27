import React, { useState } from "react";



const ToggleButton = ({ init, toggle }) => {

    const [isOn, setIsOn] = useState(init);

    const toggleBtnState = () => {
        if (isOn) {
            setIsOn(false);
            toggle(false);
        } else {
            setIsOn(true);
            toggle(true);
        }
    };

    return (
        <>
            <div
                className={isOn ? "toggle_btn toggle_btn_on" : "toggle_btn"}
                onClick={toggleBtnState}
            >
                <div
                    className={isOn ? "toggle_slider toggle_slider_on" : "toggle_slider"}
                />
            </div>
        </>
    )
};



ToggleButton.defaultProps = {
    init: false,
    toggle: () => { },
};



export default ToggleButton;
