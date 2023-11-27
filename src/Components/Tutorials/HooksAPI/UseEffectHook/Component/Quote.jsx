import React from "react";



const Quote = ({ quote, author }) => {
    return (
        <>
            <div className="quotes_panel">

                <div className="quote">{quote}</div>

                <div className="author">{author}</div>

            </div>
        </>
    )
};



export default Quote;
