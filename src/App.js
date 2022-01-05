import React, { Component } from "react";
import Gameboard from "./components/Gameboard";
import "./App.css";
import "./components/Gameboard.css";

class App extends Component {
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
