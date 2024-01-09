import React, { Component } from "react";
import Card from "./Card";
import "./ParentCard.css";



class ParentCard extends Component {
    state = {
        post: {
            id: "soc01a",
            title: "Do Pyramids hold secrets? A Cambridge researcher explains",
            timestamp: "2019-11-25T08:47:54.735Z",
            cover:
                "https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501_960_720.jpg",
            profilePhoto: "https://randomuser.me/api/portraits/men/10.jpg",
            user: "Matt Simon"
        }
    }

    render() {
        return (
            <div className="parent_card">
                <Card post={this.state.post} />
            </div>
        )
    }
}



export default ParentCard;



// In above code "extends", "return" and different values of the post is made possible using the babel compiler
// that forms the part of "create-react-app" toolchain.