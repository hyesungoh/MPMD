import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Nav from "./components/Nav/Nav";
import Header from "./routes/Header/Header";
import Movies from "./routes/Movies/Movies";
import Actor from "./routes/Actor/Actor";
import About from "./routes/About/About";

import "./App.css";

// react-transition-group을 이용하여 route간 애니메이션을 사용하기 위한 함수 분리
const SwitchRoute = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={3000}>
            <Switch location={location}>
                <Route path="/" exact={true} component={Header} />
                <Route path="/movies" component={Movies} />
                <Route path="/dramas" component={Movies} />
                <Route path="/actor" component={Actor} />
                <Route path="/about" component={About} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <SwitchRoute />
            </BrowserRouter>
        </div>
    );
};

export default App;
