import { Component } from "react";
import Timer from "./Timer";
import "./TimerInstances.css";



class TimerInstances extends Component {

    state = {
        Timers: [
            {
                id: 1,
                title: "Cake in the Oven"
            },
            {
                id: 2,
                title: "Boiling an egg"
            },
            {
                id: 3,
                title: "Write unit tests for the app"
            }
        ]
    }



    render() {
        return (
            <>
                <div className="timer_instances">
                    {
                        this.state.Timers.map(ins => (
                            <Timer
                                key={ins.id}
                                title={ins.title}
                                onRemove={() =>
                                    this.setState({
                                        timers: this.state.timers.filter(t => t.id !== ins.id)
                                    })
                                }
                            />
                        ))
                    }
                </div>
            </>
        )
    }
}



export default TimerInstances;