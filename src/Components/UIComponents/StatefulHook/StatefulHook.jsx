import React, { Component } from "react";
import "./StatefulHook.css";
import CodeInput from "./CodeInput";



class StatefulHook extends Component {
    state = {
        code: ""
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="product_code">
                        {
                            this.state.code
                        }
                    </div>

                    <CodeInput onSet={value => this.setState({ code: value })} />
                </div>
            </>
        )
    }
}


export default StatefulHook;
