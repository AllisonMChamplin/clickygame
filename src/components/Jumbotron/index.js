import React from "react";
import Reset from "../Reset/";

function Jumbotron(props) {
    const isGameOver = props.gameOver;
    if (isGameOver) {
        return (
            <p className="instructions">
                {props.message}
                <Reset gameBoardResetFunction={props.resetGame} />
            </p>
        )
    } else {
        return (
            <p className="instructions">
                {props.message}
            </p>
        )
    }
}

export default Jumbotron;

// return (
//     <p className="instructions">
//         {props.message}
//         <Reset />
//     </p>
// );