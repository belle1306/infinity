import React from "react";
import "../App.css";
import Particles from 'react-particles-js';
import Header from "../components/header";
import {Animated} from 'react-animated-css'


const ParticlesHome = () => {
    return (
    <div className="homeContainer">
        <Header />
        <Particles className="particles"
        params={{
            "particles": {
                "number": {
                    "value": 150
                },
                "size": {
                    "value": 2.5
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
	    }} 
        height= "100vh"
        width= "100vw"
        style={{ 
        backgroundImage: "url(/dark-starfield.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // position: "absolute",
        // top: 0,
        // left: 0,
        // width: "100%",
        // height: "100%"
     }}
        />
    </div>
    )
}

export default ParticlesHome;