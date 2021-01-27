import React, {Component} from 'react';
// import {connect} from 'react-redux'
import {withRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import messageForm from './components/messageForm';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/message" component={messageForm} />
                {/* <Route path="/log-in" component={LogIn} /> */}
                <Route path="/" component={Home} />
            </Switch>
        )
    }
}

export default Routes;