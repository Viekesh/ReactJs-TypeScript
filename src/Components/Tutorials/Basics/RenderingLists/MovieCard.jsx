import React from "react";
import movies from "./MovieDB";
import MovieDetails from "./MovieDetails";
import "./MovieCard.css";



const MovieCard = () => {
    return (
        <>
            <div className="movie_card_container">
                {
                    movies.map(({ id, movie_title, movie_genre }) => (
                        <MovieDetails title={movie_title} genre={movie_genre} key={id} />
                    ))
                }
            </div>
        </>
    )
}



export default MovieCard;
