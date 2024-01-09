import React from "react";



const Card = ({ post }) => {
    return (
        <div className="card">
            <img className="profile-photo" src={post.profilePhoto} alt={post.user} />
            <div className="user-name">{post.user}</div>
            <div className="time-stamp">
                {new Date(post.timestamp).toLocaleString()}
            </div>
            <div className="post-title">{post.title}</div>
            <img className="post-cover" src={post.cover} alt={post.title} />
            <button id="read-more-btn">Read more...</button>
        </div>
    )
}



export default Card;