import React from "react";
import "./Modal.css";

const Modal = ({ isOpened, onClose, data }) => {
    console.log(data);
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
                    {data.genres.map((genre) => {
                        return <span>{genre}</span>
                    })}
                    <span>/ {data.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
