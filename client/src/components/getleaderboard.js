// import React from "react";
// import Quiz from "../components/quiz";
// import {Link} from "react-router-dom";
// class GetLeaderBoard extends React.Component {
//     		constructor() {
//     			super()
//     			this.state = {
// 					leaderboard: []
                    
//     			}
//     			this.getLeaderboard =this.getLeaderboard.bind(this);
//     		}
            
    		
			           
//     		componentDidMount() {
//                 alert("getting score board at mount")
//     			fetch("/users")
//     			.then(res => res.json())
//     			.then(data => {
//     				this.setState({
//     					leaderboard : data
//     				})
//     			})
//     			.catch(err => {
//     				console.log(err);
//     			});
                
//     		}
    
    	
		
function GetLeaderBoard(){
			alert("getting score board")
    		fetch("/users/quiz", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                // body: JSON.stringify({
                //     // user_id: this.state.value,
				// 	score: this.state.input,
				// 	userName : this.state.value
                // })
            })
            .then(res => {
                res.json();
                // this.componentDidMount();
                //alert("Submitted");
            })
            .then(data =>{
				console.log(data);
				this.setState({
					leaderboard: data
				})
			})
              .catch(error => {
                console.log(error);
              })
        
    		             
    		}

export default GetLeaderBoard;