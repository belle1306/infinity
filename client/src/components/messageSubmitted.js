// import React from "react";
import {Link} from "react-router-dom";
import React from "react";
// import {Animated} from 'react-animated-css';
// import Particles from 'react-particles-js';
import ThreeStars from '../components/ThreeStars';

// const particleOpt = {
//     particles: {
//         number: {
//             value: 150,
//             density: {
//             enable: true
//             }
//         }
//     }
//   }

export default class MessageSubmitted extends React.Component {
// class MessageSubmitted extends Component {
    render() {
        return (
            <div>
                <ThreeStars />
                <div id="particles">
                
                {/* <Particles width="100vw" height="100vh" params={particleOpt} /> */}
                </div>
                    <div id="messageSubmitted">
                        {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}> */}
                            <h2>⏁⊑⏃⋏☍ ⊬⍜⎍</h2>
                        {/* </Animated> */}
                            <h3>It means 'thank you' in alien language!</h3>
                            <br/>
                            <p>Your message is on its way to the aliens!
                                Thank you for visiting our website. We look forward to seeing you soon! 🚀✨
                            </p>
                    <div className="container-submit">
                            <Link to="/ThreeHome">
                                <button className="submittedButton"
                                type="submit">
                                Back to Home
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        )
    }
}

// export default MessageSubmitted;
