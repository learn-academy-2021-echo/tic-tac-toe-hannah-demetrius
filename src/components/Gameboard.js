import React, { Component } from "react";

class Gameboard extends Component {

  static WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  constructor(props) {
    super(props);
      this.state = {
        turn: 1,
        board: Array(9).fill(null),
        won: false
      };

      this.handleMark = this.handleMark.bind(this);
  }

  getWinner() {
    for (let i = 0; i < Gameboard.WINNING_CONDITIONS; i++) {
      const [positionA, positionB, positionC] = Gameboard.WINNING_CONDITIONS[i];

      if (this.state.board[positionA] && this.state.board[positionA] === this.state.board[positionB] && this.state.board[positionA] === this.state.board[positionC]) {
        this.setState({ won: true });
        return this.state.board[positionA];
      }
    }
    return 'No winner!';
  }

  handleMark(i) {

    // You need to calculate a mark based on a state term
    // Odd values will be "O" and even values will be "X"
    // Make a copy of the boxes state to update it
    // Based on the position passed to handleMark assign a mark to that position
    // Give the boxes state the new array with the player's turn
    // Increment the turn state by one

    const mark = (this.state.turn % 2 !== 0) ? 'O' : 'X';
    const newBoard = this.state.board.slice();

    newBoard[i] = mark;

    this.setState({ board: newBoard });
    this.setState({ turn: this.state.turn + 1});
  }

  render() {
    const hasWon = this.state.won;
    const whoWon = this.getWinner();

    if (hasWon) {
      alert(whoWon);
    }

    return (
      <>
        <div className="Gameboard">
          <table>
            <tr>
              <td height="120px" width="120px" onClick={() => this.handleMark(0)}>
                { this.state.board[0] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(1)}>
                { this.state.board[1] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(2)}>
                { this.state.board[2]}
              </td>
            </tr>
            <tr>
              <td height="120px" width="120px" onClick={() => this.handleMark(3)}>
                { this.state.board[3] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(4)}>
                { this.state.board[4] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(5)}>
                { this.state.board[5]}
              </td>
            </tr>
            <tr>
              <td height="120px" width="120px" onClick={() => this.handleMark(6)}>
                { this.state.board[6] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(7)}>
                { this.state.board[7] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(8)}>
                { this.state.board[8] }
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default Gameboard;
