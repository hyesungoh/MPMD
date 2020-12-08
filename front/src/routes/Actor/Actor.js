import React, { useState, useEffect } from "react";
import axios from "axios";

const Actor = () => {
    // status state 0을 기본으로 생성 
    // > 0이면 get, 1이면 post로 데이터 가져온 후 셋스테이트
    // 
    const [actorData, setActorData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const useActorData = () => {
        const fetchUrl = "http://127.0.0.1:8000/api/actor";
        axios.get(fetchUrl).then(
            (response) => {
                setActorData(response.data);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    };

    useEffect(useActorData, []);

    const CheckStatus = () =>
        actorData.status == 0 ? (

            <div>
                <h1>this is actor get</h1>
                <form method="POST">
                    <input type="text" name={actorData.form_data.month} />
                    <input type="text" name={actorData.form_data.day} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        ) : (
            <div></div>
        );

    return (
        <div>
            {isLoaded ? (
                <CheckStatus />
            ) : (
                <div>
                    <h1>hellog</h1>
                </div>
            )}
        </div>
    );
};

export default Actor;
