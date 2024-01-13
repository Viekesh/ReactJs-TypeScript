import React from "react";
import Book from "./Book";
import BooksDB from "./BooksDB";



const UnderstandingJSX = () => {
    return (
        <>
            <div className="understanding_jsx">
                <div className="app-container">
                    <div className="app-title">Great Books</div>

                    {
                        BooksDB.map(props => {
                            <Book title={props.title} author={props.author} key={props.id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}



export default UnderstandingJSX;