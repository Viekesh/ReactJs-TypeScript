import React, { Component } from "react";
import "./Notification.css";



const NotificationText = ({ text }) => (
    <div className="notification_text">{text || "No Notifications"}</div>
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
                        <div className="toggle_btn" onClick={this.toggleDisplay}>
                            N
                        </div>

                        {
                            this.state.show ? <NotificationText text={this.props.text} /> : null
                        }
                    </div>
                </div>
            </>
        )
    }
}



export default Notification;
