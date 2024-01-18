import React from "react";
import Notification from "./Notification"; // Requires messages: Array
import NumberedButtons from "./NumberedButtons"; // Requires num: Number
import StudentCard from "./StudentCard"; // Requires student: Shape
import "./PropCheck.css";



const PropCheck = () => {
    return (
        <>
            <div className="prop_check">
                <div className="main">
                    <Notification
                        messages={["Please renew your account", "You have 2 notifications"]}
                    />

                    <NumberedButtons num={5} />

                    <StudentCard
                        student={{
                            name: "Richie Samson",
                            id: 1209,
                            active: true,
                            courses: [
                                "Deep Learning Fundamentals - 2019",
                                "Python - Intermediate"
                            ]
                        }}
                    />
                </div>
            </div>
        </>
    )
}



export default PropCheck;
