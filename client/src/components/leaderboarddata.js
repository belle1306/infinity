import React, { Component } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

const popover = props => (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Student ID: {props.id}</Popover.Title>
    <Popover.Content>
      <span>name: {props.name}</span>
      <br></br>
      <span>
        score: <strong>{props.score}</strong>
      </span>
    </Popover.Content>
  </Popover>
);

class Leaderboarddata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      score: this.props.score
    };
  }

  render() {
    return (
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={popover(this.state)}
      >
        <span>
          {this.state.name} {this.state.score}
        </span>
      </OverlayTrigger>
    );
  }
}

export default Leaderboarddata;