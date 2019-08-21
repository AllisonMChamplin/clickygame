import React from "react";
import "./style.css";

function GameBoard(props) {
    return <div className="container">{props.children}</div>;
}

export default GameBoard;

