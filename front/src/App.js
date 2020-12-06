import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Nav from "./components/Nav";
import Header from "./routes/Header";
import Movies from "./routes/Movies";

import "./App.css";

// react-transition-group을 이용하여 route간 애니메이션을 사용하기 위한 함수 분리
const SwitchRoute = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={3000}>
            <Switch location={location}>
                <Route path="/" exact={true} component={Header} />
                <Route path="/movies" component={Movies} />
                <Route path="/dramas" component={Movies} />
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
