import React from "react";



const Book = ({ props }) => {
    return (
        <>
            <div className="book">
                <div className="book_title">
                    {props.title}
                </div>
                <div className="book_author">
                    {props.title.toUpperCase()}
                </div>
            </div>
        </>
    )
}



export default Book;