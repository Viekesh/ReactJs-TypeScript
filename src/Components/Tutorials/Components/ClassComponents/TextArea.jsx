import React, { Component } from "react";
import "./TextArea.css";



class TextArea extends Component {
    state = {
        text: "",
    }

    render() {
        return (
            <div className="textarea">
                <textarea
                    name=""
                    id="TEXTAREA"
                    cols="30"
                    rows="10"
                    onChange={e => this.setState({ text: e.target.value })}
                />

                <div id="CHARCOUNT">
                    {this.state.text.length} character(s)
                </div>

                <div id="WORDCOUNT">
                    {this.state.text ? this.state.text.match(/\w+/gim).length : 0} word(s)
                </div>
            </div>
        )
    }
}

export default TextArea;