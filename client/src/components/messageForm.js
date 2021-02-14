import React, { Component } from "react";
import MessageSubmitted from "../components/messageSubmitted";
// import MessageQuotes from "../components/messageQuotes";
class MessageForm extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
            message: [],
            value: "",
            options: [
                {id: 1, name: "Mercury"}, 
                {id: 2, name: "Venus"}, 
                {id: 3, name: "Earth"},
                {id: 4, name: "Mars"},
                {id: 5, name: "Jupiter"},
                {id: 6, name: "Saturn"},
                {id: 7, name: "Uranus"},
                {id: 8, name: "Neptune"},
                {id: 9, name: "Pluto"},
            ],
            submitted: false
        }
        // this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.submitMessage = this.submitMessage.bind(this);

    };

    onChange(e) {
        // const { value } = e.target;
        // alert(value);
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

    handleInput(e) {
        e.preventDefault(); 
        this.setState({
            input: e.target.value,
        });
    };


    componentDidMount() {
    fetch("/users")
    .then(res => res.json())
    .then(data => {
        this.setState({
            // name: "",
            // message: "",
            // planets: ""
            message: data,
            planets: data
        });
    })
    .catch(err => {
        console.log(err);
    });
    }

    // submit message
    submitMessage() {
        this.setState({
            value: "",
            input: "",
            submitted: true
        })
        alert("Message received!");
        console.log(this.state.value);
        fetch("/users/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: this.state.input,
                planet_id: this.state.value
            })
        })
        .then(res => {
            res.json();
            // this.componentDidMount();
            alert("Submitted");
        })
        // .then(data => {
        //     //console.log("data with id", data);
        //     const updatedMessage = [
        //       {
        //         id: data.insertID,
        //         message: this.state.input,
        //         planet_id: this.state.value
        //       }
        //     ];
        //     this.setstate({ message: [...this.state.message, ...updatedMessage] });
        //     console.log(this.state.message);
        //   })
        .catch(error => {
            console.log(error);
        })
    }
    
    


    render() {
        const {value, options} = this.state;
        return this.state.submitted ? (
            <MessageSubmitted />
        ) : (
            <div>
                <div id="messageForm">
                    <h2>Send a message to the aliens</h2>
                    <div>
                        {/* <form onSubmit={this.submitMessage}>  */}
                        {/* <form> */}
                            {/* <form onSubmit={this.submitMessage}>  */}
                            <h4>
                            Do they exist? It's time to find out yourself! 
                            </h4>
                            {/* <h2>Current Planet: {value}</h2> */}
                            <div className="form-inputs1">
                            <label htmlFor="options">Pick a planet!</label>
                            <select id="options" value={value} onChange={e => this.onChange(e)}>
                                {options.map((planet) => {
                                    return <option key={planet.id} value={planet.id}>{planet.name}</option>
                                })}
                            </select>
                            </div>
                            <br />
                            <br />
                
                            <div className="form-group">
                                {/* <label htmlFor="your message">Your message</label> */}
                                <div className="form-inputs">
                                    <textarea
                                    // value={this.state.message}
                                    name="message"
                                    type="textarea"
                                    placeholder="Type your message..."
                                    defaultValue={this.state.input}
                                    onChange={e => this.handleInput(e)}
                                    maxLength="150"
                                    />
                                    <span id="charLimit">(150 characters limit)</span>
                                    <button 
                                        className="btn btn-lg btn-block"
                                        id="messageButton" 
                                        type="button"
                                        onClick={e => this.submitMessage()}
                                        >
                                        Send my message! 🚀✨
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* </form>  */}
                </div>
            </div> 
        )
    }
}

export default MessageForm;

