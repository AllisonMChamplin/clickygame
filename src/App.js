import React from 'react';
import './App.css';
import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron/";
// import GameCard from "./components/GameCard/";
import GameBoard from "./components/GameBoard/";
import cards from "./cards.json";

function App() {
  return (
    <div className="container-fluid" id="wrapper">
      {/* <NavBar /> */}
      <Jumbotron />
      <GameBoard cards={cards} />
      <Footer />
    </div>
  );
}

export default App;