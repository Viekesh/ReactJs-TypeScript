import React from "react";



const Book = props => {
    return (
        <>
            <div className="book">
                <div className="book-title">
                    {props.title}
                </div>
                <div className="book-author">
                    {props.title.toUpperCase()}
                </div>
            </div>
        </>
    )
}


export default Book;