import { useState } from "react";
import "./ManageEvents.scss";



const MouseEvents = () => {

    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [marker, setMarker] = useState([]);
    const onMouseMoveHandler = evt => {
        setXPos(evt.nativeEvent.offsetX);
        setYPos(evt.nativeEvent.offsetY);
    };

    const onClickHandler = evt => {
        setMarker([
            ...marker,
            {
                id: new Date().getTime(),
                x: evt.nativeEvent.offsetX - 5,
                y: evt.nativeEvent.offsetY - 5
            }
        ]);
    };



    return (
        <div className="mouse_events">

            <div className="stats">
                {xPos}, {yPos}
                <button id="clear-btn" onClick={() => setMarker([])}>
                    Clear
                </button>
            </div>

            <div
                className="canvas"
                onMouseMove={onMouseMoveHandler}
                onClick={onClickHandler}
            >
                {marker.map(m => (
                    <div className="dot" key={m.id} style={{ left: m.x, top: m.y }} />
                ))}
            </div>

        </div>
    );
};



export default MouseEvents;
