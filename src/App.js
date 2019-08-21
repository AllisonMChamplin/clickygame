import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard/";
import GameBoard from "./components/GameBoard/";
import cards from "./cards.json";


function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <GameBoard>
        <h1 className="title">Cards List</h1>
        <GameCard
          name={cards[0].name}
          image={cards[0].image}
          occupation={cards[0].occupation}
          location={cards[0].location}
        />
      </GameBoard>
      <Footer />
    </>
  );
}

export default App;

