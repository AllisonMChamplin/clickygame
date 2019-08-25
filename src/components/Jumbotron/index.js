import React from "react";

function Jumbotron(props) {
    return (
        <p className="instructions">
            {props.message}
        </p>
    );
}

export default Jumbotron;
