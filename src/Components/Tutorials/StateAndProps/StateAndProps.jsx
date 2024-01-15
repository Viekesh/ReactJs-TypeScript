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