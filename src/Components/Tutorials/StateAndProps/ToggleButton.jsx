import React, { Component } from "react";
import "./StateAndProps.css";



class ToggleButton extends Component {
    state = {
        isOn: false,
    }

    render() {
        return (
            <>
                <div className="toggle_button">
                    <button
                        className={this.state.isOn ? "btn btn_on" : "btn btn_off"}
                        onClick={() => this.setState({ isOn: !this.state.isOn })}
                    >
                        {
                            this.state.isOn ? "ON" : "OFF"
                        }
                    </button>
                </div>
            </>
        )
    }
}



export default ToggleButton;