// const planetsData = [
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


// import React, {Component} from 'react';

// class SelectPlanet extends Component {
//   state = {
//     value: "Mercury",
//     options: ["Mercury", "Venus", "Earth"]
//   };

//   onChange = e => {
//     this.setState({value : e.target.value});
//   }

//   onSubmit = e => {
//     e.preventDefault();
//     console.log(this.state.value)
//   }

// render () {
//   const {value,options} = this.state;
//   return (
//     // 
//     <form>
//       <h2>Current Choice Now: {value}</h2>
//       <label htmlFor="options">Pick a planet</label>
//       <select id="options" value= {value} onChange={this.onChange}> 
//         {/* <options value="Mercury">Mercury</options>
//         <options value="Venus">Venus</options>
//         <options value="Earth">Earth</options> */}
//         {options.map((val,index) => {
//           return <option key={index} value={val}>{val}</option>
//         })}
//       </select>
//       <button type="submit">Submit Me</button>
//     </form>
//   )
// }
// }

// export default SelectPlanet;
