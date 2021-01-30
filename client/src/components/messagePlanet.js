// import React from 'react';

// class MessagePlanet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       planets: [],
//       validationError: ""
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       planets: [
//         {id: '1', name: 'Mercury'},
//         {id: '2', name: 'Venus'},
//         {id: '3', name: 'Earth'},
//         {id: '4', name: 'Mars'},
//         {id: '5', name: 'Jupiter'},
//         {id: '6', name: 'Saturn'},
//         {id: '7', name: 'Uranus'},
//         {id: '8', name: 'Neptune'},
//         {id: '9', name: 'Pluto'},
//       ]
//     });
//   }


//   render () {
//     const { planets } = this.state;

//     // let planetsList = planets.length > 0
//     // 	&& planets.map((item, i) => {
//     //   return (
//     //     <option key={i} value={item.id}>{item.name}</option>
//     //   )
//     // }, this);

//     return (
//       <div>
//         <h3>Choose your planet</h3>
//         <select
//         value={this.state.planets}
//         onChange={e => 
//         this.setState({
//           planets: e.target.value,
//           validationError:
//           e.target.value === ""
//           ? "You must select your planet"
//           : ""
//         })
//       }
//       >
//           {this.state.planets.map(item => (
//             <option
//             key={item.id}
//             value={item.name}
//             >
//               {planets}
//             </option>
//           ))}
//           </select>
//           <div stle={{
//             color: "red",
//             marginTop: "5px"
//           }}
//           >
//             {this.state.validationError}
//           </div>
//       </div>
//     );
//   }
// }

// export default MessagePlanet;

// class MessagePlanet extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       planetsList: [
//         {id: '1', name: 'Mercury'},
//         {id: '2', name: 'Venus'},
//         {id: '3', name: 'Earth'},
//         {id: '4', name: 'Mars'},
//         {id: '5', name: 'Jupiter'},
//         {id: '6', name: 'Saturn'},
//         {id: '7', name: 'Uranus'},
//         {id: '8', name: 'Neptune'},
//         {id: '9', name: 'Pluto'},
//       ]
//     }
//   }
//   handleChange = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();
//     this.setState({
//       planetsList: e.target.value
//     })

//     // console.log(value[0].value);
//   }
//   render() {
//     return (
//       <select onChange={this.handleChange}>
//         {this.state.planetsList.map(item => {
//           return (
//             <option 
//             key={item.id}>
//             {item.id} {item.name}
//             </option>
//           )
//         })}
//       </select>
//     )
//   }
// }

// export default MessagePlanet;

import React, { Component } from 'react';
import '../App.css';
import DynamicSelect from './DynamicSelect';

const planetsList = [
  {id: '1', name: 'Mercury'},
  {id: '2', name: 'Venus'},
  {id: '3', name: 'Earth'},
  {id: '4', name: 'Mars'},
  {id: '5', name: 'Jupiter'},
  {id: '6', name: 'Saturn'},
  {id: '7', name: 'Uranus'},
  {id: '8', name: 'Neptune'},
  {id: '9', name: 'Pluto'},
];


class MessagePlanet extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selectedValue: "Nothing selected"
    }
  }

  handleSelectChange = (selectedValue) => {
    this.setState({
      selectedValue: selectedValue
    });
  }

  render() {
    return(
      <div className="App">
        <div>
        <div className="drop-down">
          <h3>Select your planet!</h3>
          <DynamicSelect planetsList={planetsList} onSelectChange={this.handleSelectChange} /> <br /><br />
          {/* <div>
            Selected value: {this.state.selectedValue}
          </div> */}
        </div>
      </div>
      </div>
    );
  }
}

export default MessagePlanet;