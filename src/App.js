import React, { Component } from "react";
import './App.css';
import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron/";
import GameBoard from "./components/GameBoard/";

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="wrapper">
        {/* <Jumbotron /> */}
        <div className="text-center clearfix game-board">
          <GameBoard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;