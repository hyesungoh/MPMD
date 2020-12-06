import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

import "./Movies.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const getMovies = () => {
        fetch("http://127.0.0.1:8000/api/movies").then((response) => {
            response.json().then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        });
    };

    useEffect(getMovies, []);

    return (
        <div className="movies">
            {isLoaded ? (
                <div className="movies__active">
                    {movies.map((movie, index) => {
                        return <VideoCard key={index} props={movie} />;
                    })}
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Movies;
