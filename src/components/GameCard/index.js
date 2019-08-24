import React from 'react';
import "./style.css";

function GameCard(props) {
    return (
        <div class="game-image" id={props.id}>
            <img alt={props.name} src={props.image} id={props.id} className="" />
        </div>
    )
}

export default GameCard;