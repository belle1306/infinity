import React from "react";
import {Link} from "react-router-dom";

export const messageSubmitted = () => {
    <div id="messageSubmitted">
        <h1>Thank you</h1>
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
