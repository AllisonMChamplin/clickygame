import React from 'react';
import "./style.css";

class GameCard extends React.Component {
    // constructor(props) {
    //     super(props);
        // this.state = { isClicked: false };
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(e) {
    //     e.preventDefault();
    //     if (!this.props.isDisabled) {
    //         console.log("The " + this.props.id + " image was clicked.");
    //         // Is it game over upon this click?
    //         if (this.state.isClicked) {
    //             this.props.gameOver();
    //         } else {
    //             this.setState(state => ({
    //                 isClicked: true
    //             }));
    //             this.props.scorePoints(1);
    //         }
    //     }
    // }

    render() {

        let classNames = "game-image hover14";
        if (this.props.isDisabled) {
            classNames = "game-image disable"
        }

        return (
            <>
                <div className={classNames} id={this.props.id}>
                    <figure><img alt={this.props.name} src={this.props.image} id={this.props.id} className="" onClick={this.props.handleClick} /></figure>
                </div>
            </>
        );
    }
}

export default GameCard;