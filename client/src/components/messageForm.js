import React, { Component } from "react";


class messageForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            message: "",
            submitted: false
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.sendMessage({
            name: this.state.name,
            message: this.state.message
        })    
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Send a message to the aliens</h1>
                        <form onSubmit={this.handleSubmit}> 
                        <p>
                        Do they exist? It's time to find out for yourself 
                        </p> 
                        <div className="form-group">
                            <label htmlFor="your name">Your name</label>
                            <div className="form-inputs">
                                <input
                                value={this.state.name}
                                name="name"
                                type="text"
                                onChange={this.handleChange}
                                />
                            </div>
                        </div> 
            
                        <div className="form-group">
                            <label htmlFor="your message">your message</label>
                            <div className="form-inputs">
                                <textarea
                                value={this.state.message}
                                name="message"
                                type="textarea"
                                onChange={this.handleChange}
                                maxLength="150"
                                />
                                <span id="charLimit">(150 characters limit</span>
                                <button id="submitButton" type="submit">
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