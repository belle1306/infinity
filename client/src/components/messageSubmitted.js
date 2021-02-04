<<<<<<< HEAD
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
=======
// import React from "react";
import {Link} from "react-router-dom";
import React, { Component } from "react";
// import {Animated} from 'react-animated-css';
import Particles from 'react-particles-js';
import { Button } from 'react-bootstrap';

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
            enable: true
            }
        }
    }
  }

class MessageSubmitted extends Component {
    render() {
        return (
            <div>
                <div id="particles">
                <Particles width="100vw" height="100vh" params={particleOpt} />
                </div>
                    <div id="messageSubmitted">
                        {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}> */}
                            <h2>⏁⊑⏃⋏☍ ⊬⍜⎍</h2>
                        {/* </Animated> */}
                            <h2>It means 'thank you' in alien language!</h2>
                            <br/>
                            <p>Your message is on its way to the aliens!
                                Thank you for visiting our website. We look forward to seeing you soon!
                            </p>
                    <div>
                        <Link to="/ThreeHome">
                            <Button variant="light"
                            id="submittedButton"
                            type="submit">
                            Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageSubmitted;
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638
