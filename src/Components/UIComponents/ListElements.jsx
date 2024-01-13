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
            <div className="list_elements">
                <h1>List Elements</h1>
                {this.state.fruits.map(f => (
                    <Fruit name={f} />
                ))}
            </div>
        );
    }
}



export default ListElements;
