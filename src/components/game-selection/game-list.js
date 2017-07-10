import React, { Component } from 'react';
import GameTitle from './game-title';

export default class GameList extends Component {
  render() {
    return(
      <ul className="game-list">
        <GameTitle/>
        <section className="separator"/>
        <GameTitle/>
        <section className="separator"/>
        <GameTitle/>
        <section className="separator"/>
      </ul>
    );
  }
}
