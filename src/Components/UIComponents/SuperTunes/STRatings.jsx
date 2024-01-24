import React from "react";
import PropTypes from "prop-types";



const STRatings = ({ stars }) => {
    return (
        <>
            {
                [...new Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(v => (
                    <div className="star">{v.Rating}</div>
                ))
            }
        </>
    )
}



STRatings.propTypes = {
    stars: PropTypes.number.isRequired
}



export default STRatings;