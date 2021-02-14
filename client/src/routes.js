import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import MessageForm from './components/messageForm';
import ThreeHome from './components/Three';
import APOD from './components/apod';
import solarscope from './components/solarscope';
import QuizForm from './components/quiz';
import MessageQuotes from './components/messageQuotes';
import GetLeaderBoard from './components/getleaderboard';



class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/apod" component={APOD} />
                <Route path="/message" component={MessageForm} />
                <Route path="/solarscope" component={solarscope} />
                <Route path="/quiz" component={QuizForm} />
                <Route path="/messageQuotes" component={MessageQuotes} />
                {/* <Route path="/" component={Home} /> */}
                <Route path="/getleaderboard" component={GetLeaderBoard}/>
                <Route path="/" component={ThreeHome} />
                <Route path="/home" component={ThreeHome} />
                
            </Switch>
        )
    }
}

export default Routes;