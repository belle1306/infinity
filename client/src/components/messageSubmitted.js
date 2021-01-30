import React from "react";
import {Link} from "react-router-dom";

export const messageSubmitted = () => {
    <div id="messageSubmitted">
        <h1>⏁⊑⏃⋏☍ ⊬⍜⎍</h1>
        <h2>It means thank you in alien language!</h2>
        <br/>
        <p>Your message is on its way to the aliens!</p>

        <Link to="/Home">
            <button 
            id="messageButton"
            type="submit">
            </button>
        </Link>
    </div>
}
