import React, { Component } from "react";

class Gameboard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        turn: 1,
        boxes: Array(9).fill(null)
      };

      this.handleMark = this.handleMark.bind(this);
  }

  handleMark(i) {
    // You need to calculate a mark based on a state term
    // Odd values will be "O" and even values will be "X"
    // Make a copy of the boxes state to update it
    // Based on the position passed to handleMark assign a mark to that position
    // Give the boxes state the new array with the player's turn
    // Increment the turn state by one
    
    const mark = (this.state.turn % 2 !== 0) ? 'O' : 'X';
    const newBoxes = this.state.boxes.slice();

    newBoxes[i] = mark;

    this.setState({ boxes: newBoxes });
    this.setState({ turn: this.state.turn + 1});
  }

  render() {

    return (
      <>
        <div className="Gameboard">
          <table>
            <tr>
              <td height="120px" width="120px" onClick={() => this.handleMark(0)}>
                { this.state.boxes[0] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(1)}>
                { this.state.boxes[1] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(2)}>
                { this.state.boxes[2]}
              </td>
            </tr>
            <tr>
              <td height="120px" width="120px" onClick={() => this.handleMark(3)}>
                { this.state.boxes[3] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(4)}>
                { this.state.boxes[4] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(5)}>
                { this.state.boxes[5]}
              </td>
            </tr>
            <tr>
              <td height="120px" width="120px" onClick={() => this.handleMark(6)}>
                { this.state.boxes[6] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(7)}>
                { this.state.boxes[7] }
              </td>
              <td height="120px" width="120px" onClick={() => this.handleMark(8)}>
                { this.state.boxes[8] }
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default Gameboard;
