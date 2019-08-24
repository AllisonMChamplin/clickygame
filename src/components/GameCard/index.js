import React from 'react';
import "./style.css";

let score = 0;

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();        
        console.log("The image was clicked.", this.props.id);
        this.setState(state => ({
            isClicked: true
        }));
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