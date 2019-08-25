import React from "react";

const styles = {
    header: {
        width: "85%",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        margin: "5px auto",
        padding: "0",
    }
};

function Jumbotron() {
    return (
        <p className="instructions">Click on an image to earn points, but don't click on any more than once!</p>
    );
}

export default Jumbotron;
