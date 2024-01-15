import React, { Component } from "react";
import Element from "./Element";



class StateAndProps extends Component {
    state = {
        items: []
    }

    add = e => {
        if (e.keyCode === 13) {
            this.setState({
                items: [
                    ...this.state.items,
                    {
                        name: e.target.value,
                        id: new Date().getTime()
                    }
                ]
            });
            e.target.value = "";
        }
    };

    render() {
        return (
            <>
                <div className="stateandprops">
                    <div className="input-holder">
                        <input
                            placeholder="Type an item and press enter"
                            onKeyUp={this.add}
                        />
                    </div>
                    <div className="items-holder">
                        {this.state.items.map(i => (
                            <Element name={i.name} key={i.id} />
                        ))}
                    </div>
                </div>
            </>
        )
    }
}



export default StateAndProps;



// In react the actual data can comes from the top level component.
// And these data gets pass through in a one way data flow to all the nested child components
// typically using "props" which acts like inlets of a component.

// Stateful components describe visuals elements with data. As you change and modify this data
// the component will automatically re-renders to reflect the change.

// React features unidirectional data flow architecture.
// Event listeners in JSX allow you to capture user events such as mouse clicks, keyboard events and more.