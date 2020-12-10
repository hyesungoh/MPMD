import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

import Loading from "../../components/Loading/Loading";
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

    const dayMaxByMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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

    useEffect(() => {
        formMonth.current.addEventListener("change", () => {
            const currenMonth = parseInt(formMonth.current.value);
            if (currenMonth >= 1 && currenMonth <= 12) {
                formDay.current.max = dayMaxByMonth[currenMonth - 1];
            }
        });
    }, []);

    if (status === "get") {
        return (
            <div className="actor">
                <h1>Find actor by birth day</h1>
                <div className="actor__base">
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="actor__custom-input">
                            <input
                                type="number"
                                min="1"
                                max="12"
                                className="input-text"
                                name="month"
                                ref={formMonth}
                                required
                            />
                            <span className="placeholder">Month</span>
                        </div>

                        <div className="actor__custom-input">
                            <input
                                type="number"
                                min="1"
                                max="31"
                                className="input-text"
                                name="day"
                                ref={formDay}
                                required
                            />
                            <span className="placeholder">Day</span>
                        </div>

                        <button
                            className="actor__hidden"
                            type="submit"
                        ></button>
                    </form>
                </div>
            </div>
        );
    } else {
        if (isLoaded) {
            return (
                <div className="actor">
                    <h1>
                        {date.month} : {date.day}
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
