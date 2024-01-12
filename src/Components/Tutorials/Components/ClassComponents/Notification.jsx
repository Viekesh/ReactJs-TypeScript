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
