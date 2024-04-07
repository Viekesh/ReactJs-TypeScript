import { Component } from "react";


class Joke extends Component {

    state = {
        joke: {},
        isLoading: false,
        error: null,
    };

    static defaultProps = {
        category: 'any', // Set a default category
    };

    getJoke = async (category) => {
        this.setState({
            isLoading: true,
            error: null,
        });

        try {
            const response = await fetch(
                `https://official-joke-api.appspot.com/jokes/${category}/random`
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            // Check the response structure before accessing joke data
            if (Array.isArray(data) && data.length > 0) {
                this.setState({ joke: data[0], isLoading: false });
            } else {
                throw new Error('Invalid API response');
            }

        } catch (error) {
            this.setState({ isLoading: false, error });
        }
    };

    // side effects when the component did mount for the first time, this function is called after our
    // component is mounted in the DOM for the first time.
    // In this we can query an API to fetch the data and update the state which causes the component did update
    // and display the results.
    // we can also subscribe to web sockets here and attach an event listeners for data
    // for instance this would be needed for an app that displays real time stock market rates.
    // we can also access DOM properties using references if needed.
    // with class component and sideeffect that do not require cleanup we can use the componentDidMount() lifecycle
    // method to perform API or network request among other things.
    componentDidMount = () => this.getJoke(this.props.category);

    // side effects when the component updates such as when data in the props updates, by using
    // componentDidUpdate method we can get an access to the previous props as well as the state
    componentDidUpdate = prevProps => {
        if (this.props.category !== prevProps.category) {
            this.getJoke(this.props.category);
        }
    };



    render() {

        // Handle error display if needed
        const { error } = this.state;
        if (error) {
            return <div>Error fetching joke: {error.message}</div>;
        }

        return (
            <>
                <div className="joke_panel">
                    <div className="joke_setup">{this.state.joke.setup}</div>
                    <div className="joke_punchline">{this.state.joke.punchline}</div>
                </div>
                <div
                    className={this.state.isLoading ? "title title_pulse" : "title"}
                    onClick={() => this.getJoke(this.props.category)}
                >
                    Joke Machine
                </div>
            </>
        );
    }
}



export default Joke;
