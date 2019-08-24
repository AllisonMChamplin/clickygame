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
        <header style={styles.header}>
            <a className="navbar-brand" href="/">Dwarf Clicky Game</a>
            <div className="score ml-auto">Score: 0 | Top Score: 0</div>
        </header>
    );
}

export default Jumbotron;
