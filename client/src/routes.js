import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import MessageForm from './components/messageForm';
import ThreeHome from './components/Three';
import APOD from './components/apod';
import solarscope from './components/solarscope';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={ThreeHome} />
                <Route path="/message" component={MessageForm} />
                <Route path="/apod" component={APOD} />
                <Route path="/solarscope" component={solarscope} />
                <Route path="/" component={ThreeHome} />
            </Switch>
        )
    }
}

export default Routes;