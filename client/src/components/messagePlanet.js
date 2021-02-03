// import React, { Component } from 'react';
// import '../App.css';
// import DynamicSelect from './DynamicSelect';
// import MessageForm from './messageForm';

// const planetsList = [
//   {id: '1', name: 'Mercury'},
//   {id: '2', name: 'Venus'},
//   {id: '3', name: 'Earth'},
//   {id: '4', name: 'Mars'},
//   {id: '5', name: 'Jupiter'},
//   {id: '6', name: 'Saturn'},
//   {id: '7', name: 'Uranus'},
//   {id: '8', name: 'Neptune'},
//   {id: '9', name: 'Pluto'},
// ];


// class MessagePlanet extends Component {
//   constructor(props) {
//     super(props)
//     this.state ={
//       selectedValue: "Nothing selected"
//     }
//     this.handleSelectChange = this.handleSelectChange.bind(this)
//   }

//   handleSelectChange = (selectedValue) => {
//     this.setState({
//       selectedValue: selectedValue
//     });
//   }

//   render() {
//     return(
//       <div className="App">
//         <div>
//         <div className="drop-down">
//           <div className="drop-intro">
//           <h3>Select your planet!</h3>
//           <DynamicSelect planetsList={planetsList} onSelectChange={this.handleSelectChange} /> <br /><br />
//           {/* <MessageForm handleSelectChange={selectedValue => this.handleSelectChange(selectedValue)} /> */}
//           <div>
//             Selected value: {this.state.selectedValue}
//           </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default MessagePlanet;