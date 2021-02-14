import React from "react";
import axios from "axios";
// import Leaderboardata from ".components/leaderboarddata"
// import Table from 'react-bootstrap/lib/table';
// import image from 'react-bootstrap/lib/table';
// import Quiz from "../components/quiz";
// import {Link} from "react-router-dom";
class GetLeaderBoard extends React.Component {
    		constructor() {
    			super()
    			this.state = {
                    // name: "",
                    // score: "",
                    leaderboard: []
                    
    			}
    			this.getscore =this.getscore.bind(this);
            }
    
    componentDidMount(){
        this.getscore()
    }        
  
  // getscore = () => {
  //     fetch(`/users/quiz`)
  //       .then(response => response.json())
  //       .then(response => {
  //         this.setState({
  //           name: "",
  //           score: "",
  //           leaderboard: response
  //         });
  //       });
  //   };

	getscore(){
    alert("getting score board")
        axios.get("/users/quiz")
                .then(({data}) => {
                this.setState({leaderboard:data})
                })
              .catch((err) => console.log(err))
            }
        
    

    render()    {
        const{leaderboard} = this.state;
    return(
     

    <div>
        {/* <button
        onClick= {this.getscore}>
            Get Leader Board
        </button> */}
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        
        {leaderboard.map(item => {
        return(
            <tr key={item.id} user_id={item.user_id} name={item.name} score={item.score}>
                {/* <td>index +1</td>
                <td>index +1</td>
                <td>index +1</td>
                <td>index +1</td> */}
            </tr>
        )
        })};
        
        {/* <Table/> */}
        <ul className="list-group">
              {leaderboard.map(leaderboard => {
                return (
                  <li className="list-group-item" key={leaderboard.id}>
                    {/* <Leaderboardata Info={leaderboard} /> */}
                    
                  </li>
                );
              })}
            </ul>
        
      </div>
    )
    
    	             

    }
}

export default GetLeaderBoard;