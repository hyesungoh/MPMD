import React from "react";

import "./VideoCard.css";

const VideoCard = (props) => {
    // 받아온 props를 기준으로 사용하기 편하게 unpacking... 더 좋은 방법이 있을 것 같다.
    const title = props.props.title,
        year = props.props.year,
        summary = props.props.summary,
        time = props.props.time,
        genres = props.props.genres
            .replace("[", "")
            .replace("]", "")
            .replace(/ |'/g, "")
            .split(","),
        date = props.props.date,
        poster = props.props.poster,
        trailer_href = props.props.trailer_href,
        trailer_img = props.props.trailer_img;

    // modal에 넘겨 줄 object를 가공
    const modalProps = {
        title,
        year,
        summary,
        time,
        genres,
        date,
        poster,
        trailer_href,
        trailer_img,
    };

    return (
        <div>
            <div
                className="video_card"
                onClick={() => {
                    props.openModal(modalProps);
                }}
            >
                <div className="video_card__img">
                    <img src={poster} alt={title} />
                </div>
                <h1>{title}</h1>
                <div className="video_card__genres">
                    {genres.map((genre, index) => {
                        return <span key={index}>{genre}</span>;
                    })}
                </div>

                <div className="video_card__date">
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
