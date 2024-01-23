import React from "react";
import PropTypes from "prop-types";
import STRatings from "./STRatings";



const SongCard = ({ data }) => {

    const { thumb, title, artist, rating } = data;
    return (
        <>
            <div className="song_card">
                <img src={thumb} alt={title} />
                <div className="song_title">
                    {title} by {artist}
                </div>

                <STRatings stars={rating} />
            </div>
        </>
    )
}



SongCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })
}



export default SongCard;