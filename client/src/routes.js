import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import MessageForm from './components/messageForm';
import ThreeHome from './components/Three';
import APOD from './components/apod';
import solarscope from './components/solarscope';
import quiz from './components/quiz';


class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={ThreeHome} />
                <Route path="/message" component={MessageForm} />
                <Route path="/apod" component={APOD} />
                <Route path="/solarscope" component={solarscope} />
<<<<<<< HEAD
                <Route path="/quiz" component={quiz} />
                <Route path="/" component={Home} />
                
=======
                <Route path="/" component={ThreeHome} />
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638
            </Switch>
        )
    }
}

export default Routes;