import React, { Component } from 'react';
import './App.css';

class ResetButton extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props);
  }
  render () {
    return (<div className='zbutton' onClick={() => this.props.handleReset()}>Reset</div>)
  }
}
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
      ],
      winner: null
    }
  }

  // function winCheck() {
  //       var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  //       return winningCombos.find(function(combo) {
  //           if (this.state.board[combo[0]] == this.state.board[combo[1]] &&
  //           this.state.board[combo[1]] == this.state.board[combo[1]] &&
  //           this.state.board[combo[2]] == this.state.board[combo[1]]) {
  //               return this.state.board[combo[0]]
  //           } else {
  //               return false
  //           }
  //       })
  //   }
  handleReset() {
    this.setState({
      board:[
        "","","","","","","","",""
      ],
      winner: null,
      currentTurn: "X"
    })
  }
  handleClick(index) {
    if (this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.winCheck() //"catsgame"
      })
    }
  }
  winCheck() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    //in this find call back function, 'combo' represents each 3 integer
    //combo in the passed in array (winningCombos).
    //combo[0] is going to be the first value of a winningCombo.
    //the function will return after checking the board state's values
    //with all possible winning combos.
    //each call to this function will look at all 8 winning combinations,
    //check if the slots are NOT blank and == in all 3 values
    var x = false
    winningCombos.find(function(combo){
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        x = currentTurn
        return currentTurn
      }
      else if (symbols[0] !== "" &&
               symbols[1] !== "" &&
               symbols[2] !== "" &&
               symbols[3] !== "" &&
               symbols[4] !== "" &&
               symbols[5] !== "" &&
               symbols[6] !== "" &&
               symbols[7] !== "" &&
               symbols[8] !== "") {
        console.log('catsgame')
        x = 'catsgame'
        return currentTurn
      }
      else {
        return false
      }
    })
    return x
  }
  // {this.state.winner ? <h1>{`The winner is
  //   ${if(this.state.currentTurn === "X"){"X"}
  //   else if (this.state.currentTurn === "O") {"O"}
  //   else {"catsgame"}}`}</h1> : null}
  // {this.state.winner ? <h1>{`The winner is ${this.state.currentTurn === "X" ? "O" : "X"}`}</h1> : null}

  render() {
    return (
      <div className="app-container">
        {//ResetButton now has access to props}
        }
        <ResetButton handleReset={this.handleReset.bind(this)}/>
        <h1> Winner: {this.state.winner ? this.state.winner : null}</h1>
        <div className="board">
          {this.state.board.map((cell, index) => {
            return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
          })}
        </div>
      </div>
    )
  }
}

export default App;
