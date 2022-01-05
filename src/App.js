import React, { Component } from "react";
import Gameboard from "./components/Gameboard";
import "./App.css";
import "./components/Gameboard.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <Gameboard />
      </>
    );
  }
}
export default App;
