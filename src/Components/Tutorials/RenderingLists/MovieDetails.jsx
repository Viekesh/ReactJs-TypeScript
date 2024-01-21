import React from "react";
import MovieGenre from "./MovieGenre";



const MovieDetails = ({ title, genre }) => {
    return (
        <>
            <div className="movie_card">
                <div className="title">{title}</div>
                <div className="genre">
                    {
                        genre.split("|").map((gen) => (
                            <MovieGenre label={gen} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}



export default MovieDetails;
