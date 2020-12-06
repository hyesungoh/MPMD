import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    const currentPath = useLocation().pathname;
    useEffect(() => {}, [currentPath]);

    const useCurrentPath = (path) => {
        if (currentPath === path) {
            return "current_path";
        } else {
            return null;
        }
    };

    return (
        <div className="nav">
            <div className="nav__logo">
                <h1>MPMD</h1>
            </div>
            <div className="nav__content">
                <Link to="/" className={useCurrentPath("/")}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fas fa-home"></i> home
                </Link>

                <Link to="/movies" className={useCurrentPath("/movies")}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fas fa-film"></i> movies
                </Link>

                <Link to="/dramas" className={useCurrentPath("/dramas")}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fas fa-broadcast-tower"></i> dramas
                </Link>
            </div>

            {/* <hr className="nav__hr"/> */}

            <div className="nav__footer">
                <span>this is powered py IMDB</span>
            </div>
        </div>
    );
};

export default Nav;
