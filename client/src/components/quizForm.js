import React from "react";
import MessageForm from "../components/messageForm";
// import Quiz from "../components/quiz";


// class quizForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             userId: null,
//             score: "",
//             submitted: false
//         }
//         this.handleInputScore = this.handleInputScore(this);
//         this.handleUserId = this.handleUserId.bind(this)
//         this.submitScore = this.submitScore.bind(this);
//     }

//     handleInputScore(e) {
//         e.preventDefault(); 
//         this.setState({
//             name: e.target.value,
//         });
//     };

//     handleUserId(e) {
//         e.preventDefault(); 
//         this.setState({
//             message: e.target.value,
//         });
//     };
    
//     componentDidMount() {
//         fetch("/users/quiz")
//         .then(res => res.json())
//         .then(data => {
//             this.setState({
//                 userId: data,
//                 score: "",
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }

//     // show list of planets
//     // do i need it by id?
//     // getPlanets(id) {
//     //     fetch("/users//" + id, {
//     //         method: "GET",
//     //         headers: {
//     //             "Content-Type": "application/json"
//     //         }
//     //     })
//     //     .then(res => res.json())
//     //     .then(res => {
//     //         this.componentDidMount();
//     //     });
//     // }

//     // submit message
//     submitScore() {
//         alert('Clicked!');
//         fetch("/users/message", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 insertUserId: this.state.handleUserId,
//                 insertScore: this.state.handleInputScore,
            
//             })
//         })

//         // .then(res => {
//         // res.json();
//         //     this.componentDidMount();
//         //     alert("Submitted");
//         // })
//         .catch(error => {
//             console.log(error);
//         });
//     }


//     render() {
//         return (
//             <div>
//                 <div id="messageForm">
//                     <h1>Send a message to the aliens</h1>
//                         <form onSubmit={this.submitMessage}> 
//                         <p>
//                         Do they exist? It's time to find out yourself 
//                         </p>
//                         <Quiz /> 
//                         <br />
//                         <div className="form-group">
// 							<span>
//                             <label htmlFor="your score">Your score</label></span>
//                             <div className="form-inputs">
// 							<input
//               					type="text"
// 								placeholder="input score here"
								
//                                 // onChange={e => this.handleInputScore(e)}
//                                 />
// 							<span><label htmlFor="your USER ID">Your user ID</label></span>
// 							<div className="form-inputs"></div>
// 								<input
//               					type="text"
// 								placeholder="number id eg:1" 
								
//                                 // onChange={e => this.handleInputuserid)}
//                                 />
                            
//                                 <button 
//                                     id="messageButton" 
//                                     type="submit"
//                                     // onClick={e => this.submitScore()}
//                                     >
//                                     Save your score
//                                 </button>
//                             </div>
//                         </div> 
//                 </form>
//             </div> 
//             </div>
//         )
//     }
// }

// export default quizForm;


class QuizForm extends React.Component {
    constructor() {
        super()
        this.state = {
            userId: null,
            input: null,
            score: [],
            submitted: false
        }
        // this.handleInputScore = this.handleInputScore(this);
        this.handleUserId = this.handleUserId.bind(this)
        this.submitScore = this.submitScore.bind(this);
    }
    
    handleInputScore(e) {
        e.preventDefault(); 
        this.setState({
            input: e.target.value,
        });
        
    };

    handleUserId(e) {
        e.preventDefault(); 
        this.setState({
            userId: e.target.value,
        });
    };
    
    componentDidMount() {
        fetch("/users")
        .then(res => res.json())
        .then(data => {
            this.setState({
                userId: data,
                score: data
            })
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    submitScore(){
        this.setState({
            userId: null,
            input: null,
            submitted:true
        })
        alert("Score submitted")
        fetch("/users/quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: this.state.userId,
                score: this.state.input
            })
        })
        .then(res => {
            res.json();
            // this.componentDidMount();
            //alert("Submitted");
        })
        // .then(data => {
        // 	//console.log("data with id", data);
        // 	const updatedScore = [
        // 	{
        // 		id: data.insertID,
        // 		userId: this.state.userId,
        // 		score: this.state.input
        // 	}
        // 	];
        // 	this.setstate({ score: [...this.state.score, ...updatedScore] });
        // 	console.log(this.state.score);
        // })
        .catch(error => {
            console.log(error);
        })
}
    render() {
        return this.state.submitted ? (
            <MessageForm />
        ) : (
                <div>
                    <div id="messageForm">
                        <h2>Submit your score</h2>
                            <form> 
                                {/* onSubmit={this.submitScore} */}
                            
                            <br />
                            <div className="form-group">
                                <label htmlFor="user ID">Your UserId</label>
                                <div className="form-inputs">
                                    <input
                                    value={this.state.handleUserId}
                                    type="text"
                                    onChange={e => this.handleUserId(e)}
                                    />
                                </div>
                            </div> 
                            <br />
                
                            <div className="form-group">
                                <label htmlFor="score">Your Score</label>
                                <div className="form-inputs">
                                    <input
                                    value={this.state.handleInputScore}
                                    
                                    type="textarea"
                                    onChange={e => this.handleInputScore(e)}
                                    />
                                    <span id="charLimit">(150 characters limit)</span>
                                    <button 
                                        id="messageButton" 
                                        type="submit"
                                        onClick={e => this.submitScore()}
                                        >
                                        Submit your score
                                    </button>
                                </div>
                            </div>
                            </form> 
                    </div>
                </div>  
            )
        }
    }

export default QuizForm;



// import { useEffect } from 'react';

// const Quiz = url => {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = "https://files.liveworksheets.com/embed/embed.js";
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
  
//     }
//   }, ["https://www.liveworksheets.com/worksheets/en/Science/The_Solar_System/Our_Solar_System_xa5810sy"]);
// };