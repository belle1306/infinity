// import { json } from "express";
import React, { Component } from "react";
// import MessagePlanet from "../components/messagePlanet";
// import DynamicSelect from './DynamicSelect';
import SelectPlanet from "../components/Dropdown";

// const planetsList = [
//     {id: '1', name: 'Mercury'},
//     {id: '2', name: 'Venus'},
//     {id: '3', name: 'Earth'},
//     {id: '4', name: 'Mars'},
//     {id: '5', name: 'Jupiter'},
//     {id: '6', name: 'Saturn'},
//     {id: '7', name: 'Uranus'},
//     {id: '8', name: 'Neptune'},
//     {id: '9', name: 'Pluto'},
// ];

class MessageForm extends Component {
    constructor() {
        super()
        this.state = {
            // name: "",
            input: "",
            message: [],
            value: "",
            // options: ["Mercury", "Venus", "Earth"],
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
    }

    onChange = e => {
        // const { value } = e.target;
        // alert(value);
        this.setState({value: e.target.value})
    }

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

    // show list of planets
    // do i need it by id?
    // getPlanets(id) {
    //     fetch("/users/planets/" + id, {
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
    submitMessage() {
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
        .then(data => {
            //console.log("data with id", data);
            const updatedMessage = [
              {
                id: data.insertID,
                message: this.state.input,
                planet_id: this.state.value
              }
            ];
            this.setstate({ message: [...this.state.message, ...updatedMessage] });
            console.log(this.state.message);
          })
          .catch(error => {
            console.log(error);
          })
    }
    
    


    render() {
        const {value, options} = this.state;
        return (
            <div>
                <div id="messageForm">
                    <h2>Send a message to the aliens</h2>
                        {/* <form onSubmit={this.submitMessage}>  */}
                        <form>
                            {/* <form onSubmit={this.submitMessage}>  */}
                            <p>
                            Do they exist? It's time to find out yourself! 
                            </p>
                            <h2>Current Planet: {value}</h2>
                            <label htmlFor="options">Pick a planet!</label>
                            <select id="options" value={value} onChange={this.onChange}>
                                {options.map((planet) => {
                                    return <option key={planet.id} value={planet.id}>{planet.name}</option>
                                })}
                            </select>
                            {/* <SelectPlanet /> */}
                            {/* <MessageSelect /> */}
                            {/* <DynamicSelect planetsList={planetsList} onSelectChange={this.handleSelectChange} /> */}
                            {/* <MessagePlanet onClick={this.submitMessage} />  */}
                            <br />
                            {/* <div className="form-group">
                                <label htmlFor="your name">Your name</label>
                                <div className="form-inputs">
                                    <input
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={e => this.handleInputName(e)}
                                    />
                                </div>
                            </div>  */}
                            <br />
                
                            <div className="form-group">
                                <label htmlFor="your message">Your message</label>
                                <div className="form-inputs">
                                    <textarea
                                    // value={this.state.message}
                                    name="message"
                                    type="textarea"
                                    defaultValue={this.state.input}
                                    onChange={e => this.handleInput(e)}
                                    maxLength="150"
                                    />
                                    <span id="charLimit">(150 characters limit)</span>
                                    <button 
                                        className="btn btn-dark btn-lg btn-block"
                                        id="messageButton" 
                                        type="submit"
                                        onClick={e => this.submitMessage()}
                                        >
                                        Send your message to the aliens!
                                    </button>
                                </div>
                            </div>
                        </form> 
                </div>
            </div> 
        )
    }
}

export default MessageForm;

