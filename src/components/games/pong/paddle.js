import React, { Component } from 'react';

export default class Paddle extends Component {


  render() {
    var style = {
      width: "1em",
      height: "4em",
      position: "absolute",
      left: this.props.paddle.x + "em",
      top: this.props.paddle.y + "em",
      backgroundColor: "white"
    }

    return(
      <div
        onMouseMove={this.movePaddle}
        style={style}/>
    );
  }
  movePaddle(event) {
    this.props.paddle.y = event.clientY/10;
  }
}
