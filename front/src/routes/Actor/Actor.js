import React, { useState, useRef } from "react";
import axios from "axios";

import Loading from "../../components/Loading";
import ActorCard from "./ActorCard/ActorCard";

import "./Actor.css";

const Actor = () => {
    const [status, setStatus] = useState("get");
    const [isLoaded, setIsLoaded] = useState(false);
    const [date, setDate] = useState([]);
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
            setDate(response.data.date);
            setIsLoaded(true);
        });
    };

    if (status === "get") {
        return (
            <div className="actor">
                <div className="actor__base">
                    <h1>actor get</h1>
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="actor__base__input">
                            <input
                                type="text"
                                className="input-text"
                                name="month"
                                ref={formMonth}
                            />
                            <input
                                type="text"
                                className="input-text"
                                name="day"
                                ref={formDay}
                            />
                        </div>
                        <input
                            type="submit"
                            class="input-submit"
                            value="submit"
                        />
                    </form>
                </div>
            </div>
        );
    } else {
        if (isLoaded) {
            return (
                <div className="actor">
                    <h1>
                        {date.month} : {date.day}{" "}
                    </h1>
                    {actorList.map((actor, index) => {
                        return <ActorCard key={index} props={actor} />;
                    })}
                </div>
            );
        } else {
            return (
                <div className="actor">
                    <Loading />
                </div>
            );
        }
    }
};

export default Actor;
