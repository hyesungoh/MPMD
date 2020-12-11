import React from "react";
import Actor from "../Actor";

const ActorCard = (props) => {
    console.log(props);
    const { name, image_src, image_href, summary } = props.props;
    const image_base_url = "https://www.imdb.com";
    return (
        <div className="card">
            <div className="card__img">
                <img src={image_src} alt={name} />
            </div>
            <div className="card__name">
                <span>{name}</span>
            </div>
            <div className="card__summary">
                <span>{summary}</span>
            </div>
        </div>
    );
};

export default ActorCard;
