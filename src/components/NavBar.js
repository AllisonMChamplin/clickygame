import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <div className="score ml-auto">Score: 0 | Top Score: 0</div>
        </nav>
    );
}

export default NavBar;


