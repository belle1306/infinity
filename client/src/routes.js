import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import Home from './components/Home';
import messageForm from './components/messageForm';
import APOD from './components/apod';
import solarscope from './components/solarscope';
import Quiz from './components/quiz';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/message" component={messageForm} />
                <Route path="/apod" component={APOD} />
                <Route path="/solarscope" component={solarscope} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/" component={Home} />
                
            </Switch>
        )
    }
}

export default Routes;