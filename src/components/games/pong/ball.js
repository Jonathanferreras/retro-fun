import React, { Component } from 'react';

export default class Ball extends Component {
  render() {
    var style = {
      width: "1em",
      height: "1em",
      borderRadius: "8px",
      position: "absolute",
      top: this.props.y + "em",
      left: this.props.x + "em",
      backgroundColor: "white"
    }

    return(
      <div style={style}></div>
    );
  }
}
