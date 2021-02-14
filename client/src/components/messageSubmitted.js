import {Link} from "react-router-dom";
import React from "react";
import ThreeStars from '../components/ThreeStars';



export default class MessageSubmitted extends React.Component {
    render() {
        return (
            <div>
                <ThreeStars />
                <div id="particles">
                </div>
                    <div id="messageSubmitted">
                            <h2>⏁⊑⏃⋏☍ ⊬⍜⎍</h2>
                            <h3>It means 'thank you' in alien language!</h3>
                            <br/>
                            <p>Your message is on its way to the aliens!</p>
                            <p>In the meantime, click the button below to discover inspirational quotes from great people to inspire you 🚀✨</p>
                            <div className="container-submit">
                            <Link to="/MessageQuotes">
                                <button className="submittedButton"
                                type="submit">
                                Discover Quotes
                                </button>
                            </Link>
                            </div>
                    </div>
            </div>
        )
    }
}

// export default MessageSubmitted;
