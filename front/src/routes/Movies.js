import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import Modal from "../components/Modal";

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

    const [isOpened, setOpened] = useState(false);
    const openModal = () => setOpened(true);
    const closeModal = () => setOpened(false);
    useEffect(getMovies, []);

    return (
        <div className="movies">
            {isLoaded ? (
                <div className="movies__active">
                    <div className="movies__header">
                        <h1>Most Popular Movies</h1>
                    </div>
                    {movies.map((movie) => {
                        return (
                            <VideoCard
                                key={movie.id}
                                props={movie}
                                openModal={openModal}
                            />
                        );
                    })}
                </div>
            ) : (
                <Loading />
            )}

            <Modal isOpened={isOpened} onClose={closeModal}></Modal>
        </div>
    );
};

export default Movies;
