import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import GameBoard from "./components/GameBoard";


function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <GameBoard />
      <Footer />
    </>
  );
}

export default App;
