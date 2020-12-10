import React from "react";
import "./Modal.css";

const Modal = ({ isOpened, onClose, data }) => {
    // IMDB api의 트레일러 동영상 부분은 imdb url에 추가될 path를 보내줌으로
    // 기본 url을 작성하여 더함
    const BASE_URL = "https://www.imdb.com";
    return (
        // state의 상태에 따라 modal의 클래스를 조작하여 보여줌을 구현
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
