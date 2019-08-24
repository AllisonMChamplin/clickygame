import React from 'react';
import "./style.css";

function GameCard(props) {
    return ( <img alt={props.name} src={props.image} id={props.id} className="" /> ) 
}

export default GameCard;