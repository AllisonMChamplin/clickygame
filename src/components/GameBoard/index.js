import React from 'react';
import "./style.css";
import Jumbotron from "../Jumbotron/";
import GameCard from "../GameCard/";
import cardsJson from "../../cards.json";

const styles = {
    header: {
        color: "#fff"
    },
    contHeader: {
        width: "95%",
        margin: "0 auto"
    },
    title: {
        margin: "10px auto",
        color: "#fff"
    },
    score: {
        color: "#fff",
        border: "1px solid #666"
    }
};

const cardOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let cOrder = cardOrder.slice(0);
for (let i = cOrder.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [cOrder[i], cOrder[j]] = [cOrder[j], cOrder[i]];
}

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardOrder: cOrder,
            isClicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            gameOver: false,
            score: 0,
            highScore: 0,
            message: "Click on a dwarf to earn points, but don't click on any more than once!"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("hi***");
        console.log("e: ", e);
        let isClickedArray = this.state.isClicked.slice(0);
        let isClicked = isClickedArray[e];
        if (isClicked) {
            this.gameOver();
        } else {
            isClickedArray[e] = 1;
            this.setState({ isClicked: isClickedArray });
            this.scorePoints(1);
        }
    }

    scorePoints = (points) => {
        // console.log("scorePoints: ", points);
        this.setState({ message: "You guessed correctly and scored a point! Guess again!" });
        let oldScore = this.state.score;
        let newScore = oldScore + points;
        this.setState({ score: newScore });
        if (this.state.highScore <= newScore) {
            this.setState({ highScore: newScore });
        }
        this.shuffle();
    }

    shuffle() {
        let cardList = this.state.cardOrder.slice(0);
        for (let i = cardList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
            this.setState({ cardOrder: cardList });
        }
        return;
    }

    gameOver = () => {
        this.setState({ gameOver: true, message: "Game Over!" });
        return;
    }

    resetGame = () => {
        this.setState({ gameOver: false, message: "Click on a dwarf to earn points, but don't click on any more than once!", score: 0, isClicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
        this.shuffle();
    }

    // shuffleCards() {
    //     let cardList = this.state.cardOrder;
    //     for (let i = cardList.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    //         [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
    //         this.setState({ cardOrder: cardList });
    //     }
    // }

    render() {
        return (
            <>
                <header style={styles.header}>
                    <div className="container-fluid" style={styles.contHeader}>
                        <div className="row">
                            <div className="col"><h1>React Hobbit Clicky Game</h1></div>
                        </div>
                        <div className="row">
                            <div className="col"><Jumbotron message={this.state.message} gameOver={this.state.gameOver}
                                score={this.state.score} resetGame={this.resetGame} /></div>
                        </div>
                        <div className="row">
                            <div className="col text-center"><div>Score: {this.state.score}</div></div>
                            <div className="col text-center"><div>Top Score: {this.state.highScore}</div></div>
                        </div>
                    </div>
                </header>
                <div>
                    {
                        this.state.cardOrder.map(card => (
                            <GameCard
                                id={cardsJson[card].id}
                                key={cardsJson[card].id}
                                name={cardsJson[card].name}
                                image={cardsJson[card].image}
                                scorePoints={this.scorePoints}
                                gameOver={this.gameOver}
                                isDisabled={this.state.gameOver}
                                handleClick={() => this.handleClick(card)}
                            />
                        ))
                    }
                </div>
            </>
        )
    }
};

export default GameBoard;








