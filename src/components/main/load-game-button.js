import React, { Component } from 'react';

export default class LoadGameButton extends Component {
  render() {
    return(
      <button
        onMouseDown={this.props.handleMouseDown}
        className="load-game-button">Choose Game</button>
    );
  }
}
