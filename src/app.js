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
      left: "-25vw"
    };
    this.handleMouseDown.bind(this);
  }

  handleMouseDown() {
    this.setState({left: "0"})
  }

  render() {
    var changeStyle = {
      left: this.state.left
    }

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
