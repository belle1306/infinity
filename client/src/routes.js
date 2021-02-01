import React, {Component} from 'react';
// import {connect} from 'react-redux'
import {withRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import ThreeHome from './components/Three';
import messageForm from './components/messageForm';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={ThreeHome} />
                <Route path="/message" component={messageForm} />
                <Route path="/" component={ThreeHome} />
            </Switch>
        )
    }
}

export default Routes;