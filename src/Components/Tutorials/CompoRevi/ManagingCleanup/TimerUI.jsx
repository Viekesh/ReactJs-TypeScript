import { Component } from "react";
import Timer from "./Timer";
import { v1 as uuid } from "uuid";
import "./TimerUI.scss";



class TimerUI extends Component {

    state = {
        timers: []
    };

    addTimer = name =>
        this.setState({ timers: [{ id: uuid(), name }, ...this.state.timers] });

    removeTimer = id =>
        this.setState({
            timers: this.state.timers.filter(t => t.id !== id)
        });

    render() {

        return (
            <div className="timer_ui_container">

                <div className="create-timer">
                    <input
                        type="text"
                        placeholder="Title"
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                this.addTimer(e.target.value);
                                e.target.value = "";
                            }
                        }}
                    />
                </div>

                <div className="timer-bench">
                    {this.state.timers.map(t => (
                        <Timer
                            name={t.name}
                            key={t.id}
                            onRemove={() => this.removeTimer(t.id)}
                        />
                    ))}
                </div>

            </div>
        );
    }
}



export default TimerUI;
