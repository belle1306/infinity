import React, { Component } from "react";
import Quiz from "../components/quiz";


class quizForm extends Component {
    constructor() {
        super()
        this.state = {
            userId: null,
            score: "",
            submitted: false
        }
        this.handleInputScore = this.handleInputScore(this);
        this.handleUserId = this.handleUserId.bind(this)
        this.submitScore = this.submitScore.bind(this);
    }

    handleInputScore(e) {
        e.preventDefault(); 
        this.setState({
            name: e.target.value,
        });
    };

    handleUserId(e) {
        e.preventDefault(); 
        this.setState({
            message: e.target.value,
        });
    };
    
    componentDidMount() {
        fetch("/users/quiz")
        .then(res => res.json())
        .then(data => {
            this.setState({
                userId: data,
                score: "",
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    // show list of planets
    // do i need it by id?
    // getPlanets(id) {
    //     fetch("/users//" + id, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //         this.componentDidMount();
    //     });
    // }

    // submit message
    submitScore() {
        alert('Clicked!');
        fetch("/users/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                insertUserId: this.state.handleUserId,
                insertScore: this.state.handleInputScore,
            
            })
        })

        // .then(res => {
        // res.json();
        //     this.componentDidMount();
        //     alert("Submitted");
        // })
        .catch(error => {
            console.log(error);
        });
    }


    render() {
        return (
            <div>
                <div id="messageForm">
                    <h1>Send a message to the aliens</h1>
                        <form onSubmit={this.submitMessage}> 
                        <p>
                        Do they exist? It's time to find out yourself 
                        </p>
                        <Quiz /> 
                        <br />
                        <div className="form-group">
							<span>
                            <label htmlFor="your score">Your score</label></span>
                            <div className="form-inputs">
							<input
              					type="text"
								placeholder="input score here"
								
                                // onChange={e => this.handleInputScore(e)}
                                />
							<span><label htmlFor="your USER ID">Your user ID</label></span>
							<div className="form-inputs"></div>
								<input
              					type="text"
								placeholder="number id eg:1" 
								
                                // onChange={e => this.handleInputuserid)}
                                />
                            
                                <button 
                                    id="messageButton" 
                                    type="submit"
                                    // onClick={e => this.submitScore()}
                                    >
                                    Save your score
                                </button>
                            </div>
                        </div> 
                </form>
            </div> 
            </div>
        )
    }
}

export default quizForm;