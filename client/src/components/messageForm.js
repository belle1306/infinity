import React, { Component } from "react";
import MessagePlanet from "../components/messagePlanet";


class messageForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            message: "",
            planets: [],
            submitted: false
        }
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputMessage = this.handleInputMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleInputName(e) {
        e.preventDefault(); 
        this.setState({
            name: e.target.value,
        });
    };

    handleInputMessage(e) {
        e.preventDefault(); 
        this.setState({
            message: e.target.value,
        });
    };

    componentDidMount() {
        fetch("/users/message")
        .then(res => res.json())
        .then(json => {
            this.setState({
                name: "",
                message: "",
                planets: []
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    // show list of planets
    // do i need it by id?
    getPlanets(id) {
        fetch("/users/planets/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            this.componentDidMount();
        });
    }

    // submit message
    submitMessage() {
        alert('Clicked!');
        fetch("/users/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                insertName: this.state.handleInputName,
                insertMessage: this.state.handleInputMessage,
                selectPlanets: this.state.getPlanets
            })
        })
        .then(res => {
            res.json();
            this.componentDidMount();
            alert("Submitted");
        })
        .catch(error => {
            console.log(error);
        });
    }


    render() {
        return (
            <div>
                <div id="messageForm">
                    <MessagePlanet />
                    <h1>Send a message to the aliens</h1>
                        <form onSubmit={this.submitMessage}> 
                        <p>
                        Do they exist? It's time to find out yourself 
                        </p> 
                        <div className="form-group">
                            <label htmlFor="your name">Your name</label>
                            <div className="form-inputs">
                                <input
                                value={this.state.name}
                                name="name"
                                type="text"
                                onChange={e => this.handleInputName(e)}
                                />
                            </div>
                        </div> 
                        <br />
            
                        <div className="form-group">
                            <label htmlFor="your message">your message</label>
                            <div className="form-inputs">
                                <textarea
                                value={this.state.message}
                                name="message"
                                type="textarea"
                                onChange={e => this.handleInputMessage(e)}
                                maxLength="150"
                                />
                                <span id="charLimit">(150 characters limit)</span>
                                <button 
                                    id="messageButton" 
                                    type="submit"
                                    onClick={e => this.submitMessage()}
                                    >
                                    Send your message to the aliens
                                </button>
                            </div>
                        </div>
                        </form> 
                </div>
            </div>  
        )
    }
}

export default messageForm;

// pages/messageView.js
// const messageView = () => (
//     <div>
//         <form>
//             <h3>What would you like to say to the aliens?</h3>
//                 <div className="form-group">
//                     <label>What's your name?</label>
//                     <input type="text" className="form-control" placeholder="Name" />
//                 </div>
//                 <div className="form-group">
//                     <label>What's your message?</label>
//                  <input type="text" className="form-control" placeholder="Message" />
//                  </div>
//                 <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
//         </form>
//     </div>
// );

// export default messageView;


// this also same like above
// export default class messageView extends Component {
//     render() {
//         return (
//             <form>
//                 <h3>What would you like to say to the aliens?</h3>

//                 <div className="form-group">
//                     <label>What's your name?</label>
//                     <input type="text" className="form-control" placeholder="Name" />
//                 </div>

//                 <div className="form-group">
//                     <label>What's your message?</label>
//                     <input type="text" className="form-control" placeholder="Message" />
//                 </div>

//                 <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
//             </form>
//         );
//     }
// }