import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Dramas from "./components/Dramas";

import "./App.css";

const SwitchRoute = withRouter(({ location }) => {
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                <Switch location={location}>
                    <Route path="/" exact={true} component={Header} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/dramas" component={Dramas} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
});

const App = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/").then((response) => {
            response.json().then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(result);
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <div className="App">
                {isLoaded ? (
                    <BrowserRouter>
                        <Nav />
                        <SwitchRoute />
                    </BrowserRouter>
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
};

export default App;
