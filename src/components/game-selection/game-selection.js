import React, { Component } from 'react';
import GameList from './game-list';

export default class GameSelection extends Component {

  render() {
    return(
      <div
        style={this.props.style}
        className="game-selection">
        <h2 className="game-selection-head">Select a game</h2>
        <section className="separator"/>
        <GameList/>
      </div>
    );
  }
}
