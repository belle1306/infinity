// import React from "react";
import {Link} from "react-router-dom";
import React, { Component } from "react";

class MessageSubmitted extends Component {
    render() {
        return (
        <div id="messageSubmitted">
            <h2>⏁⊑⏃⋏☍ ⊬⍜⎍</h2>
                <h2>It means thank you in alien language!</h2>
            <br/>
            <p>Your message is on its way to the aliens!
                Thank you for visiting our website. We look forward to seeing you soon!
            </p>
            <div>
                <Link to="/ThreeHome">
                    <button 
                    id="submittedButton"
                    type="submit">
                    Back to Home
                    </button>
                </Link>
            </div>
        </div>
        )
    }
}

export default MessageSubmitted;