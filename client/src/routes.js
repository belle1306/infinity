import React, {Component} from 'react';
// import {connect} from 'react-redux'
<<<<<<< HEAD
import {withRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import ThreeHome from './components/Three';
=======
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import Home from './components/Home';
>>>>>>> 376a65bb4319897cbbc95d95267cfbf15f3bfc87
import messageForm from './components/messageForm';
import APOD from './components/apod';
import solarscope from './components/solarscope';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={ThreeHome} />
                <Route path="/message" component={messageForm} />
<<<<<<< HEAD
                <Route path="/" component={ThreeHome} />
=======
                <Route path="/apod" component={APOD} />
                <Route path="/solarscope" component={solarscope} />
                <Route path="/" component={Home} />
>>>>>>> 376a65bb4319897cbbc95d95267cfbf15f3bfc87
            </Switch>
        )
    }
}

export default Routes;