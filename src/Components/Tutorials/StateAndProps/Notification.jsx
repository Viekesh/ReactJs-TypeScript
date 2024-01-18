import React from "react";



const Notification = ({ messages }) => {
    return (
        <>
            <ul className="notification">
                {
                    messages.map((m, i) => {
                        <li key={i}>{m}</li>
                    })
                }
            </ul>
        </>
    )
}



export default Notification;