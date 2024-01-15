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