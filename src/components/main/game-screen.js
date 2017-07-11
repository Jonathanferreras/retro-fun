import React, { Component } from 'react';
import Pong from '../games/pong/pong';

export default class GameScreen extends Component {
  render() {
    return(
      <div className="game-screen">
        <Pong />
        {/* <h2 className="screen-msg">No Game Selected.</h2> */}
      </div>
    );
  }
}
