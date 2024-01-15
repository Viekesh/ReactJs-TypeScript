import React, { Component } from "react";
import "./ListElements.css";



const Fruit = ({ name }) => {
    return (
        <>
            <div className="fruit">{name}</div>
        </>
    )
}

class ListElements extends Component {
    state = {
        fruits: ["Apples", "Kiwi", "Mango", "Musk Melon", "Avocado"]
    }

    render() {
        return (
            <div className="app">
                {this.state.fruits.map(f => (
                    <Fruit name={f} />
                ))}
            </div>
        );
    }
}



export default ListElements;



// When using class component state management is a built -in feature.
// You can create and manage state variables directly with no extra tools needed.
// The first thing that need to do is declare and initialize state properties.This can be done either in the
// constructor method of class component or using the create react app based workflow.
