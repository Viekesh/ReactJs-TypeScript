import { Component } from "react";
import WeatherDB from "./WeatherDB";
import "./WeatherCard.css";



class WeatherCard extends Component {

    state = {
        data: null,
    };

    fetchWeather = city => {
        WeatherDB(city).then(data =>
            this.setState({
                data
            })
        );
    };

    componentDidMount = () => this.fetchWeather();

    componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.city) {
            this.fetchWeather(this.props.city);
        }
    };

    render() {
        return (
            <>
                {
                    this.state.data ? (
                        <div className="weather_card y_axis_center">
                            <h1 id="city" className="comic-neue-bold">{this.state.data.city}</h1>
                            <div id="conditions" className="comic-neue-bold">{this.state.data.condition}</div>
                            <div id="currentTemp" className="comic-neue-bold">{this.state.data.current}&deg; C</div>

                            <div className="min_max x_axis_center">
                                <div id="minTemp" className="comic-neue-bold">Min : {this.state.data.minTemp}&deg; C</div>
                                <div id="maxTemp" className="comic-neue-bold">Max : {this.state.data.maxTemp}&deg; C</div>
                            </div>
                        </div>
                    ) : (
                        <h4>No Data Available</h4>
                    )
                }
            </>
        )
    }
}



export default WeatherCard;