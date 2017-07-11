import React, { Component } from 'react';
import Ball from './ball';
import Loop from './loop';

export default class Pong extends Component{
  constructor(props) {
    super(props);

    this.state = {
      x: Math.floor(Math.random() * 19),
      y: Math.floor(Math.random() * 14),
      vx: 24 * (Math.random() < 0.5 ? 1: -1),
      vy: 20 * (Math.random() < 0.5 ? 1: -1)
    }
  }

  componentDidMount(){
    Loop(function(tick){
      this.state.x += this.state.vx * tick
      this.state.y += this.state.vy * tick

      if(this.state.x > 19) {
        this.state.vx *= -1
      }
      else if(this.state.x < 0){
        this.state.vx *= -1
      }

      if(this.state.y > 14) {
        this.state.vy *= -1
      }
      else if(this.state.y < 0){
        this.state.vy *= -1
      }

      this.forceUpdate()
    }.bind(this))
  }

  render() {
    return(
      <div>
        <Ball
          y={this.state.y} x={this.state.x} />
      </div>
    );
  }
}
