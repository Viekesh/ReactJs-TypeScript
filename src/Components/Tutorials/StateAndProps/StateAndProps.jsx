import React, { Component } from "react";
import Element from "./Element";



class StateAndProps extends Component {
    state = {
        items: []
    }

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