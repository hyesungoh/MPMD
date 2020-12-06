import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import Modal from "../components/Modal";

import "./Movies.css";

// 제작 방향은 드라마와 영화의 컴포넌트를 나누는 것이지만
// 제작 도중에 재사용이 가능할 것 같아 useLocation을 이용하여 현재 pathname을 기준으로
// fetch 받을 url과 h1 태그에 보여줄 내용을 가공하여 사용

const Movies = () => {
    // fetch 중 상태관리를 위한 state
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    // 현재 path를 기준으로 fetch 받을 url이 변경됨
    const currentPath = useLocation().pathname;
    const fetchUrl = "http://127.0.0.1:8000/api" + currentPath;

    // useEffect와 사용될 data fetch 함수
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

    useEffect(getMovies, []);
    
    // modal의 상태 관리를 위한 state
    const [isOpened, setOpened] = useState(false);
    const [modalProps, setModalProps] = useState([]);

    // 자식 컴포넌트에서 클릭을 감지시 해당 props를 넘겨줘야 하므로
    // 함수를 넘겨주며 해당 함수의 매개변수로 modalData의 setState를 받아서 사용
    const openModal = (modalData) => {
        setModalProps(modalData);
        setOpened(true);
    };
    const closeModal = () => setOpened(false);

    const pathName = currentPath.replace("/", "").toUpperCase();

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
