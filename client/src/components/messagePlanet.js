import React, { Component } from 'react';

class MessagePlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    this.setState({
      planets: [
        {id: '1', name: 'Mercury'},
        {id: '2', name: 'Venus'},
        {id: '3', name: 'Earth'},
        {id: '4', name: 'Mars'},
        {id: '5', name: 'Jupiter'},
        {id: '6', name: 'Saturn'},
        {id: '7', name: 'Uranus'},
        {id: '8', name: 'Neptune'},
        {id: '9', name: 'Pluto'},
      ]
    });
  }


  render () {
    const { planets } = this.state;

    let planetsList = planets.length > 0
    	&& planets.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <h3>Choose your planet</h3>
        <select>
          {planetsList}
        </select>
      </div>
    );
  }
}

export default MessagePlanet;