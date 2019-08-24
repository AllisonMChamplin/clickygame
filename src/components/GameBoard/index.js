import React from 'react';
import "./style.css";
import GameCard from "../GameCard/";

function GameBoard(props) {
    return (
        <div className="text-center clearfix game-board">
            {props.cards.map(card => (
                <GameCard
                    id={card.id}
                    key={card.id}
                    name={card.name}
                    image={card.image}
                />
            ))}
        </div>
    )
}

export default GameBoard;