import { Component } from "react";
import WeatherCard from "./WeatherCard";



class WeatherPanel extends Component {

    state = {
        city: null
    };

    render() {
        return (
            <>
                <div className="ui weather_app x_axis_center">
                    <button
                        className="getDataBtn"
                        onClick={() => this.setState({ city: "New York" })}
                    >
                        New York
                    </button>
                    <button
                        className="getDataBtn"
                        onClick={() => this.setState({ city: "Los Angeles" })}
                    >
                        Los Angeles
                    </button>
                </div>
                <WeatherCard city={this.state.city} />
            </>
        );
    }
}



export default WeatherPanel;