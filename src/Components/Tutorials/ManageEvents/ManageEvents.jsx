import { useState } from "react";
import "./ManageEvents.css";



const ManageEvents = () => {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [isComplete, setIsComplete] = useState(false);

    const registerBtnHandler = () => {
        if (name && email) {
            setIsComplete(true);
        }
    };

    return (
        <>
            <section className="manage_events">
                <h1 id="title">Register</h1>

                {
                    !isComplete ? (
                        <div className="form_fields y_axis_center">
                            <input type="text" id="name_field" placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                            <input type="text" id="email_field" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                            <button id="registerBtn" onClick={registerBtnHandler}>Register</button>
                        </div>
                    ) : (
                        <h1 id="confirm">
                            Thank You {name}!, we will contact you shortly on {email}
                        </h1>
                    )
                }
            </section>
        </>
    )
}



export default ManageEvents;