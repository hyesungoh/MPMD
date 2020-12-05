import React, { useState, useEffect } from "react";
import Loading from "../components/Loading"

import "./Dramas.css";

const Dramas = () => {
    const [dramas, setDramas] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const getDramas = () => {
        fetch("http://127.0.0.1:8000/api/dramas").then((response) => {
            response.json().then(
                (result) => {
                    setIsLoaded(true);
                    setDramas(result);
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        });
    };

    useEffect(getDramas, []);

    return <div className="dramas">
        <h1>Hello im dramas</h1>
    </div>;
};

export default Dramas;
