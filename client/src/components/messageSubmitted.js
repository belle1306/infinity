import React from "react";
import {Link} from "react-router-dom";

class MessageSubmitted extends Component {
    render() {
        <div id="messageSubmitted">
            <h1>⏁⊑⏃⋏☍ ⊬⍜⎍</h1>
                <h2>It means thank you in alien language!</h2>
            <br/>
            <p>Your message is on its way to the aliens!
                Thank you for visiting our website. We look forward to seeing you soon!
            </p>

            <Link to="/ThreeHome">
                <button 
                id="messageButton"
                type="submit">
                    Back to Home
                </button>
            </Link>
        </div>
    }
}

export default MessageSubmitted;