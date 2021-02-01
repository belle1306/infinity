import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import messageForm from './components/messageForm';
import APOD from './components/apod';
import solarscope from './components/solarscope';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={ThreeHome} />
                <Route path="/message" component={messageForm} />
                <Route path="/apod" component={APOD} />
                <Route path="/solarscope" component={solarscope} />
                <Route path="/" component={ThreeHome} />
            </Switch>
        )
    }
}

export default Routes;