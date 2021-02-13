import React from "react";
// import Quiz from "../components/quiz";
// import {Link} from "react-router-dom";
class GetLeaderBoard extends React.Component {
    		constructor() {
    			super()
    			this.state = {
					leaderboard: []
                    
    			}
    			this.getscore =this.getscore.bind(this);
    		}


	getscore(){
    alert("getting score board")
    	fetch("/users/quiz", {
            method: "GET",
            headers: {
                    "Content-Type": "application/json"
            }
        })
            .then((response) => {
                console.log("res", response);
                return response.json();
              })
              .then((data) => {
                this.state.leaderboard = data;
              })
              .catch((err) => console.log(err))
        
    }

    render()    {
    return(
     

    <div><span>
        <button
        onClick= {this.getscore}>
            Get Leader Board
        </button></span>
        </div>
    )
    }
    		             
}

export default GetLeaderBoard;