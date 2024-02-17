import { Component } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";



momentDurationFormatSetup(moment);

class Timer extends Component {
    state = {
        seconds: 0
    }

    componentDidMount() {
        this.timerInstance = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }

    formatTime = seconds =>
        moment
            .duration(seconds, "seconds")
            .format([
                moment.duration(1, "second"),
                moment.duration(1, "minute"),
                moment.duration(1, "hour")
            ]);

    componentWillUnmount = () => clearInterval(this.timerInstance);

    render() {
        return (
            <div className="timer-instance">
                <div className="timer-name">{this.props.title}</div>
                <div className="timer-display">
                    {this.formatTime(this.state.seconds)}
                </div>
                <button className="remove-timer" onClick={this.props.onRemove}>
                    Del
                </button>
            </div>
        );
    }
}



export default Timer;