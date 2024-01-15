import React, { Component } from "react";
import "./Notification.css";



const NotificationText = ({ text }) => (
    <div className="notification-text">{text || "No Notifications"}</div>
);

class Notification extends Component {
    state = {
        show: true,
    }

    toggleDisplay = () => {
        this.setState({
            show: !this.state.show
        })
    }

    // render method is mandatory to define JSX template which generates react elements 
    // when the component render.
    render() {
        return (
            <>
                <div className="ntfctn">
                    <div className="notification_widget">
                        {
                            this.state.show ? <NotificationText text={this.props.text} /> : null
                        }

                        <div className="toggle_btn" onClick={this.toggleDisplay}>
                            Notification
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default Notification;



// In react the actual data can comes from the top level component.
// And these data gets pass through in a one way data flow to all the nested child components
// typically using "props" which acts like inlets of a component.

// Stateful components describe visuals elements with data. As you change and modify this data
// the component will automatically re-renders to reflect the change.

// React features unidirectional data flow architecture.
// Event listeners in JSX allow you to capture user events such as mouse clicks, keyboard events and more.