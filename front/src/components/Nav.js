import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <h1>MPMD</h1>
            </div>
            <div className="nav__content">
                <Link to="/"><i className="fas fa-home"></i> home</Link>
                <Link to="/movies"><i className="fas fa-film"></i> movies</Link>
                <Link to="/dramas"><i class="fas fa-broadcast-tower"></i> dramas</Link>
            </div>

            {/* <hr className="nav__hr"/> */}

            <div className="nav__footer">
                <span>this is powered py IMDB</span>
            </div>
        </div>
    );
};

export default Nav;
