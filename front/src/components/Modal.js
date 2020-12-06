import React from "react";
import "./Modal.css";

const Modal = ({ isOpened, onClose, data }) => {
    const BASE_URL = "https://www.imdb.com";
    return (
        <div className={isOpened ? "modal_base modal__showing" : "modal_base"}>
            <div className="modal">
                <div className="modal__header">
                    <h1>{data.title}</h1>
                    <button onClick={onClose}>
                        <i className="far fa-times-circle"></i>
                    </button>
                </div>
                <div className="modal__etc">
                    <span>{data.time} /</span>
                    {isOpened
                        ? data.genres.map((genre, index) => {
                              return <span key={index}>{genre}</span>;
                          })
                        : null}
                    <span>/ {data.date}</span>
                </div>

                <div className="modal__poster_summary">
                    <div className="modal__poster">
                        <img src={data.poster} alt={data.title} />
                    </div>
                    <div className="modal__summary">
                        <p>{data.summary}</p>
                    </div>
                </div>

                <div className="modal__trailer">
                    <a href={BASE_URL + data.trailer_href} rel="noreferrer" target="_blank">
                        <i className="far fa-play-circle fa-5x"></i>
                    </a>
                    <img src={data.trailer_img} alt={data.title} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
