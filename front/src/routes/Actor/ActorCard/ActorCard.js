import React from "react";
import Actor from "../Actor";

const ActorCard = (props) => {
    console.log(props);
    const { name, image_src, image_href, summary } = props.props;
    const image_base_url = "https://www.imdb.com";
    return (
        <div className="card">
            <img src={image_src} alt={name} />
            <span>{name}</span>
            <span>{summary}</span>
        </div>
    );
};

export default ActorCard;
