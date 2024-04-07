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

// Data can be passed down to child components using props or the context API.
// It is important to note that the state is local and private to a component and is not accessible outside a
// given component.

// Keep state at the nearest logical parent component. Keeping state at the nearest parent helps you manage and
// reason with state data changes logically.

// When state changes react automatically re-render the component and its children and updating the UI accordingly.

// React features unidirectional data flow architecture.
// Event listeners in JSX allow you to capture user events such as mouse clicks, keyboard events and more.

// Class component offer built in state management. On the other hand the functional component are inherently
// stateless. They accept their data using props and do not offer either state management or lifecycle methods.

// https://flaviocopes.com/react-declarative/