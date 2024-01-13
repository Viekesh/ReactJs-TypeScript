import React from "react";
import { booksList } from "./ComponentsDB";
import Book from "./Book";



const BooksList = () => {
    return (
        <>
            <div className="app-container">
                <div className="app-container">
                    <div className="app-title">Great Books</div>

                    {
                        booksList.map((props) => {
                            <Book title={props.title} author={props.author} key={props.id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default BooksList;