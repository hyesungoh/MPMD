import React, { useState, useRef } from "react";
import axios from "axios";

const Actor = () => {
    const [status, setStatus] = useState("get");
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [actorList, setActorList] = useState([]);

    const fetchUrl = "http://127.0.0.1:8000/api/actor";
    const formMonth = useRef();
    const formDay = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("month", formMonth.current.value);
        formData.append("day", formDay.current.value);

        setStatus("post");

        axios({
            method: "post",
            url: fetchUrl,
            data: formData,
        }).then((response) => {
            setActorList(response.data.actor_data);
            setIsLoaded(true);
        });
    };

    if (status === "get") {
        return (
            <div>
                <h1>actor get</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="month" ref={formMonth} />
                    <input type="text" name="day" ref={formDay} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    } else {
        if (isLoaded) {
            return (
                <div>
                    <h1> POST </h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1> LOADING </h1>
                </div>
            );
        }
    }
};

export default Actor;
