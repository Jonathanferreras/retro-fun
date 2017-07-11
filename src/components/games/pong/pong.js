import React, { Component } from 'react';
import Ball from './ball';
import Paddle from './paddle';
import Loop from './loop';

export default class Pong extends Component{
  constructor(props) {
    super(props);

    this.state = {
      ball: {
        x: Math.floor(Math.random() * 24),
        y: Math.floor(Math.random() * 24),
        vx: 24 * (Math.random() < 0.5 ? 1: -1),
        vy: 20 * (Math.random() < 0.5 ? 1: -1)
      },
      paddle: {
        left: {
          x: 0.25,
          y: 10
        },
        right: {
          x: 24 - 0.50,
          y: 10
        }
      }
    }
  }

  componentDidMount(){
    Loop(function(tick){
      this.state.ball.x += this.state.ball.vx * tick;
      this.state.ball.y += this.state.ball.vy * tick;

      if(this.state.ball.vx > 0
      && this.state.ball.x > 24 - 1
      && this.state.ball.y > this.state.paddle.right.y - 2
      && this.state.ball.y < this.state.paddle.right.y + 2){
        this.state.ball.vx *= -1;
      }
      if(this.state.ball.vx < 0
      && this.state.ball.x < 0 + 1
      && this.state.ball.y > this.state.paddle.left.y - 2
      && this.state.ball.y < this.state.paddle.left.y + 2){
        this.state.ball.vx *= -1;
      }

      if(this.state.ball.x > 24) {
        this.state.ball.vx *= -1;
      } else if(this.state.ball.x < 0){
        this.state.ball.vx *= -1;
      }

      if(this.state.ball.y > 24) {
        this.state.ball.vy *= -1;
      } else if(this.state.ball.y < 0){
        this.state.ball.vy *= -1;
      }

      this.forceUpdate()
    }.bind(this))
  }

  render() {
    return(
      <div>
        <Paddle paddle={this.state.paddle.left}/>
        <Paddle paddle={this.state.paddle.right}/>
        <Ball ball={this.state.ball}/>
      </div>
    );
  }
}
