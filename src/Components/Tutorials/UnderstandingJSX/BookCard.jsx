import React from "react";



const BookCard = ({ post }) => {
    return (
        <>
            <div className="book_card">
                <div className="card">
                    <img src={post.profilePhoto} alt={post.user} className="profile_photo" />

                    <div className="user_name">{post.username}</div>

                    <div className="time_stamp">
                        {
                            new Date(post.timestamp).toLocaleString()
                        }
                    </div>

                    <div className="post_title">{post.title}</div>

                    <img src={post.coverPhoto} alt={post.title} className="post_cover" />

                    <button id="readMore_btn">Read More...</button>
                </div>
            </div>
        </>
    )
}



export default BookCard;
