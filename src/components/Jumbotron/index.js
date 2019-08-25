import React from "react";
import Reset from "../Reset/";

function Jumbotron(props) {
    const isGameOver = props.gameOver;
    if (isGameOver) {
        return <Reset test={props.resetGame} />;
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