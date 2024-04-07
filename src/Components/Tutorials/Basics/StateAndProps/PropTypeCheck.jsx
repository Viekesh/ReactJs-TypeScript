import React from "react";
import Notification from "./Notification"; // Requires messages: Array
import NumberedButtons from "./NumberedButtons"; // Requires num: Number
import StudentCard from "./StudentCard"; // Requires student: Shape
import "./PropCheck.css";
import PropTypes from "prop-types"



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



// Prop type checking is a technique used in ReactJs to validate the data received by the component through
// its props. It helps ensure that props are of expected type and format which is used for preventing bugs
// and improving code robustness.

// Prop type checking caches errors during development, it saving your time and frustration.

// It help to debug the code, because expected prop type gives us valuable context and information about error,
// this saves developers lot of time.

// React provides a library called "prop-types" that offers various validators for different data types (string,
// number, object, etc.). We can define which types are accepted for each prop in a React component.