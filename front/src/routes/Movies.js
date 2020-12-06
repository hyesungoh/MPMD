import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import Modal from "../components/Modal";

import "./Movies.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const currentPath = useLocation().pathname;
    const fetchUrl = "http://127.0.0.1:8000/api" + currentPath;

    const getMovies = () => {
        fetch(fetchUrl).then((response) => {
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
    const [modalProps, setModalProps] = useState([]);

    const openModal = (modalData) => {
        setModalProps(modalData);
        setOpened(true);
    };
    const closeModal = () => setOpened(false);

    const pathName = currentPath.replace("/","").toUpperCase();

    useEffect(getMovies, []);

    return (
        <div className="movies">
            {isLoaded ? (
                <div className="movies__active">
                    <div className="movies__header">
                        <h1>Most Popular {pathName}</h1>
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

            <Modal
                isOpened={isOpened}
                onClose={closeModal}
                data={modalProps}
            ></Modal>
        </div>
    );
};

export default Movies;
