import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //inside of a component, there is a life cycle.
  // LIFE CYCLE (an abstract programming concept):
  // imagine an order, it goes through a bunch of states.
  // in cart, checkout, paid not shipped, shipped not delivered.. etc
  // component: defined not mounted on DOM, on DOM not rendered, rendered..
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "","","","","","","","",""
      ]
    }
  }

  handleClick(index) {
    if (this.state.board[index] === "") {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL
      })
    }
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
      </div>
    )
  }
}

export default App;
