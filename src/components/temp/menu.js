import React, { Component } from 'react';
import GameTitle from './game-title';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: "-100px"
    }
  }

  render() {
    return(
      <div id="menu" >
        <h2 className="menu-head">Select a Game</h2>
        <section className="separator"/>
        <ul className="game-list">
          <GameTitle/>
          <section className="separator"/>
          <GameTitle/>
          <section className="separator"/>
          <GameTitle/>
          <section className="separator"/>
        </ul>
      </div>
    );
  }
}
