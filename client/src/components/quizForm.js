import React from "react";
// import Quiz from "../components/quiz";
import {Link} from "react-router-dom";
class QuizForm extends React.Component {
    		constructor() {
    			super()
    			this.state = {
    				value: "",
    				user_id: null,
    				input: "",
    				score: [],
                    
    			}
    			this.handleInputScore = this.handleInputScore.bind(this);
    			this.handleUserId = this.handleUserId.bind(this);
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
    				value: e.target.value,
    			});
    		};
            
    		componentDidMount() {
    			fetch("/users")
    			.then(res => res.json())
    			.then(data => {
    				this.setState({
    					user_id: data,
    					score: data
    				})
    			})
    			.catch(err => {
    				console.log(err);
    			});
                
    		}
    
    		submitScore(){
    		alert("Score submitted")
    		fetch("/users/quiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: this.state.value,
    				score: this.state.input
                })
            })
            .then(res => {
                res.json();
                // this.componentDidMount();
                //alert("Submitted");
            })
            // .then(data => {
            //     //console.log("data with id", data);
            //     const updatedScore = [
            //       {
            //         id: data.insertID,
            //         user_id: this.state.value,
    		// 		score: this.state.input
            //       }
            //     ];
            //     this.setstate({ score: [...this.state.score, ...updatedScore] });
            //     console.log(this.state.score);
            //   })
              .catch(error => {
                console.log(error);
              })
        }
    		render(){
                
    		return (                      
    					<div>
    						<div id="QuizForm">                            
    								<form>                                           
    								<br />
    								<div className="QuizForm">
    									<label htmlFor="user ID">Your UserId</label>
    									<div className="form-inputs">
    										<input
    										defaultvalue={this.state.user_id}
    										type="text"
    										onChange={e => this.handleUserId(e)}
    										/>
    									</div>
    								</div> 
    								<br />
                        
    								<div className="QuizForm">
    									<label htmlFor="score">Your Score</label>
    									<div className="form-inputs">
    										<input
    										defaultvalue={this.state.score}
    										onChange={e => this.handleInputScore(e)}
    										/>
    										{/* <span id="charLimit">(150 characters limit)</span> */}
    										<button 
    											id="messageButton" 
    											type="submit"
    											onClick={e => this.submitScore(e)}
    											>
    											Submit your score
    										</button>
    									</div>
    								</div>
    								</form> 
    						</div>
                            <Link to="/solarscope">
                                <button className="submittedButton"
                                type="submit">
                                Learn more about the solar system here!
                                </button>
                            </Link>
    					</div>  
    				)
    			}
    		}
    
    export default QuizForm;
    