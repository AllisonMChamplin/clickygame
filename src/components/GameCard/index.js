import React from 'react';
import "./style.css";

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("The " + this.props.id + " image was clicked.");
        // Is it game over?
        if (this.state.isClicked) {
            this.props.gameOver();
            return;
        }
        this.setState(state => ({
            isClicked: true
        }));
        this.props.scorePoints(1);
        console.log(this.state.isClicked);
    }

    render() {
        return (
            <>
                <div className="game-image hover14" id={this.props.id}>
                    <figure><img alt={this.props.name} src={this.props.image} id={this.props.id} className="" onClick={this.handleClick} /></figure>
                </div>
            </>
        );
    }
}

export default GameCard;