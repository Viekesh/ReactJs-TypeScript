import { Component } from "react";
import JokesPanel from "./JokesPanel";
import "./JokesAPISetup.css";



class JokesAPISetup extends Component {
    state = {
        joke: {},
        isLoading: false,
    }



    getJoke = async () => {
        this.setState({
            isLoading: true,
        });

        const callJokeAPI = await fetch("https://official-joke-api.appspot.com/random_joke");

        const resolveJoke = await callJokeAPI.json();

        this.setState({
            joke: resolveJoke,
            isLoading: false,
        })
    };



    componentDidMount = () => this.getJoke();



    render() {
        return (
            <>
                <section className="jokes_container x_y_axis_center">
                    <JokesPanel
                        setup={this.state.joke.setup}
                        punchline={this.state.joke.punchline}
                    />

                    <div
                        className={this.state.isLoading ? "title title_pulse comic-neue-bold" : "title comic-neue-bold"}
                        onClick={this.getJoke}
                    >
                        JokeMachine
                    </div>
                </section>
            </>
        )
    }

}



export default JokesAPISetup;