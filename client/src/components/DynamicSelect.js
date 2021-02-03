// import React, {Component} from 'react';

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


// class DynamicSelect extends Component{
//     constructor(props){
//         super(props)
//     }

//     //On the change event for the select box pass the selected value back to the parent
//     handleChange = (event) =>
//     {
//         let selectedValue = event.target.value;
//         this.props.onSelectChange(selectedValue);
//     }

//     render(){
//         let planetsList = this.props.planetsList;
//         let options = planetsList.map((data) =>
//                 <option 
//                     key={data.id}
//                     value={data.id}
//                 >
//                     {data.name}
//                 </option>
//             );
        
//             return (
//                 <div>
//                     <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
//                         <option>Select Item</option>
//                         {options} 
//                     </select>
//                 </div>
//         )
//     }
// }

// export default DynamicSelect;