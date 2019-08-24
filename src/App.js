import React, { Component } from "react";
import './App.css';
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron/";
import GameBoard from "./components/GameBoard/";
import GameCard from "./components/GameCard/";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  // state = {
  //   cards
  // };

  // Map over this.state.cards and render a GameCard component for each card object
  render() {
    return (
      <div className="container-fluid" id="wrapper">
        <Jumbotron />
        <div className="text-center clearfix game-board">
          <GameBoard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;