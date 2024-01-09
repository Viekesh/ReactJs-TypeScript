import React, { Component } from "react";



export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick.bind(this)}>Increment</button>
            </div>
        )
    }
};

// In this the component must implement the "render()" function  which means that it must produce
// visual content that it would render on the page.



// In react the actual data can comes from the top level component.
// And these data gets pass through in a one way data flow to all the nested child components
// typically using "props" which acts like inlets of a component.

// Stateful components describe visuals elements with data. As you change and modify this data
// the component will automatically re-renders to reflect the change.

// React features unidirectional data flow architecture.
// Event listeners in JSX allow you to capture user events such as mouse clicks, keyboard events and more.