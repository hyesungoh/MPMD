import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y, s) => [
    -(y - window.innerHeight / 2) / 30,
    (x - window.innerWidth / 2) / 30,
    s,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const trans_img = (x, y, s) =>
    `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ActorCard = (props) => {
    const { name, image_src, image_href, summary } = props.props;
    const image_base_url = "https://www.imdb.com";

    const [pr, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const handleClick = (href) => {
        window.open(image_base_url + href);
        console.log(href);
    };

    return (
        <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y, 1.1) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: pr.xys.interpolate(trans) }}
            onClick={() => {
                handleClick(image_href);
            }}
        >
            <animated.div
                className="card__img"
                style={{ transform: pr.xys.interpolate(trans_img) }}
            >
                <img src={image_src} alt={name} />
            </animated.div>

            <div className="card__name">
                <span>{name}</span>
            </div>
            <div className="card__summary">
                <span>{summary}</span>
            </div>
        </animated.div>
    );
};

export default ActorCard;
