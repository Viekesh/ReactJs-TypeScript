import React from "react";
import MovieGenre from "./MovieGenre";



const MovieDetails = ({ id, title, genre }) => {
    return (
        <>
            <div className="movie_card">
                <div className="title">{title}</div>
                <div className="genre">
                    {
                        genre.split("|").map((gen) => (
                            <MovieGenre key={id} label={gen} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}



export default MovieDetails;
