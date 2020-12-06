import React from "react";
import "./VideoCard.css";

const VideoCard = (props) => {
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

    return (
        <div className="video_card">
            <div className="video_card__img">
                <img src={poster} alt={title} />
            </div>
            <h1>{title}</h1>
            <div className="video_card__genres">
                {genres.map((genre) => {
                    return <span>{genre}</span>;
                })}
            </div>

            <div className="video_card__date">
                <span>{date}</span>
            </div>
        </div>
    );
};

export default VideoCard;
