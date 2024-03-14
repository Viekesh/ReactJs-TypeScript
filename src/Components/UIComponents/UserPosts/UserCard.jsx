import React from "react";



const UserCard = ({ post }) => {
    return (
        <>
            <div className="card">
                <img className="profile-photo" src={post.profilePhoto} alt={post.user} />
                <div className="display_flex">
                    <span className="user-name">{post.user}</span>
                    <div className="time-stamp">
                        {new Date(post.timestamp).toLocaleString()}
                    </div>
                </div>
            </div>
            <div className="post-title">{post.title}</div>
            <img className="post-cover" src={post.cover} alt={post.title} />
            <button id="read-more-btn">Read more...</button>
        </>
    )
}



export default UserCard;