import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from './img/retro-logo.png';
import GameScreen from './components/main/game-screen';
import LoadGameButton from './components/main/load-game-button';
import GameSelection from './components/game-selection/game-selection';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false,
      init: false
    };
    this.handleMouseDown.bind(this);
  }

  handleMouseDown() {
    this.setState({visible: !this.state.visible})
  }

  render() {
    var changeStyle =
      (this.state.visible != this.state.init)
      ? {left: 0} : {left: "-25vw"};

    return(
        <div className="app-container">
          <img src={Logo} className="logo" alt="pic not found"/>
          <GameScreen/>
          <LoadGameButton handleMouseDown={this.handleMouseDown.bind(this)}/>
          <GameSelection style={changeStyle}/>
        </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.app')
);
