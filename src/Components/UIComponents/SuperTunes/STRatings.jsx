import React from "react";
import PropTypes from "prop-types";



const STRatings = ({ stars }) => {
    return (
        <>
            {
                [...new Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(v => (
                    <div className="star">{v}</div>
                ))
            }
            {/* {stars > 0 && (
                Array.from({ length: Math.round(stars <= 5 ? stars : 0) }).map((v) => (
                    <div key={v} className="star"></div>
                ))
            )} */}
        </>
    )
}



STRatings.propTypes = {
    stars: PropTypes.number.isRequired
}



export default STRatings;