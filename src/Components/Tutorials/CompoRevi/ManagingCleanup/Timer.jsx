// import { Component } from "react";
// import moment from "moment";
// import momentDurationFormatSetup from "moment";




// momentDurationFormatSetup(moment);



// class Timer extends Component {

//     state = {
//         isPaused: false,
//         seconds: 0
//     };


//     componentDidMount = () => {
//         this.timerInstance = setInterval(() => {
//             if (!this.state.isPaused) {
//                 this.setState({
//                     seconds: this.state.seconds + 1
//                 });
//             }
//         }, 1000);
//     };

//     componentWillUnmount = () => clearInterval(this.timerInstance);

//     formatTime = seconds =>
//         moment.duration(seconds, "seconds").format("HH:mm:ss");

//     render() {
//         return (
//             <div className="timer y_axis_center">
//                 <div className="timer-name">
//                     {this.props.name} {this.state.isPaused ? "(Paused)" : null}
//                 </div>
//                 <div className="timer-display">
//                     {this.formatTime(this.state.seconds)}
//                 </div>
//                 <div
//                     className="pauseBtn"
//                     onClick={() =>
//                         this.setState({
//                             isPaused: !this.state.isPaused
//                         })
//                     }
//                 />
//                 <div className="removeBtn" onClick={() => this.props.onRemove()} />
//             </div>
//         );
//     }
// }



// export default Timer;




import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const Timer = ({ name, onRemove }) => {

    // useState hook manages timer state (seconds) and pause state (isPaused).
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(false);



    // a useRef hook to store the timer instance (timerRef), allowing access and clearing in the cleanup function.
    const timerRef = useRef(null); // useRef hook for timer instance



    // Replaces componentDidMount and componentWillUnmount lifecycle methods.
    // Creates a timer instance using setInterval inside the effect.
    // Includes a cleanup function to clear the interval on unmount.
    // Dependency array[isPaused] ensures the effect runs only when isPaused changes, optimizing performance.
    useEffect(() => {
        timerRef.current = setInterval(() => {
            if (!isPaused) {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }
        }, 1000);

        // Cleanup function to clear the interval on unmount
        return () => clearInterval(timerRef.current);
    }, [isPaused]); // Dependency array ensures effect runs on pause/unpause

    const formatTime = (seconds) => moment.duration(seconds, "seconds").format("HH:mm:ss");

    const handlePause = () => setIsPaused(!isPaused);

    return (
        <div className="timer y_axis_center">
            <div className="timer-name">
                {name} {isPaused ? '(Paused)' : null}
            </div>
            <div className="timer-display">{formatTime(seconds)}</div>
            <div className="pauseBtn" onClick={handlePause}>
                {isPaused ? 'Resume' : 'Pause'}
            </div>
            <div className="removeBtn" onClick={onRemove}>Del</div>
        </div>
    );
};

export default Timer;