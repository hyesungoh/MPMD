import React from "react";
import "./Modal.css";

const Modal = ({ key, props, isOpened, onClose }) => {
    if (isOpened) {
        return (
            <div className="modal">
                <h1>fuck</h1>
            </div>
        );
    } else {
        return null;
    }
};

export default Modal;
