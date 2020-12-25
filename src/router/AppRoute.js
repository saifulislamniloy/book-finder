import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import BookDetailpage from '../pages/BookDetailPage';
import HomePage from "../pages/HomePage";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/book-detail" component={BookDetailpage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;