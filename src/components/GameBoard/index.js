import React from 'react';
import "./style.css";
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
        fontSize: "1.3em",
        border: "1px solid #666",
        padding: "6px 0 10px 0",
        marginTop: "12px"
    }
};

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameCardArray: [],
            score: 0,
            highScore: 0
        };
    }

    scorePoints = (points) => {
        console.log("scorePoints: ", points);
        let oldScore = this.state.score;
        let newScore = oldScore + points;
        this.setState({ score: newScore });
        this.shuffleCards(this.state.gameCardArray);
    }

    gameOver = () => {
        console.log("gameOver");
        if (this.state.score > this.state.highScore || this.state.score === 0) {
            this.setState({ highScore: this.state.score });
        }
    }

    componentDidMount() {
        console.log("componentDidMount: ", this);
        let test = cardsJson.map(card => (
            <GameCard
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
                scorePoints={this.scorePoints}
                gameOver={this.gameOver}
            />
        ))
        console.log("test: ", test);
        this.shuffleCards(test);
    }

    shuffleCards(cardList) {
        // let cardList = this.state.gameCardArray;
        console.log("cardList: ", cardList);
        for (let i = cardList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
        }
        this.setState({ gameCardArray: cardList });
        this.updateBoard();
    }

    updateBoard() {
        return (
            <>
                <header style={styles.header}>
                    <div className="container-fluid" style={styles.contHeader}>
                        <div className="row">
                            <div className="col"><div  style={styles.score}>Score: {this.state.score}</div></div>
                            <div className="col-6"><h1 style={styles.title}>Dwarf Clicky Game</h1></div>
                            <div className="col"><div  style={styles.score}>Top Score: {this.state.highScore}</div></div>
                        </div>
                    </div>
                </header>
                <div>
                    {this.state.gameCardArray}
                </div>
            </>
        )
    }

    render() {
        return (
            this.updateBoard()
        )
    }
};

export default GameBoard;





    // componentWillUnmount() {
    //     console.log("componentWillUnmount: ", this);
    // }

    // handleClick() {

    // }

    // shuffleCards() {
    //     let order = this.orderArray;
    //     for (let i = order.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    //         [order[i], order[j]] = [order[j], order[i]];
    //         console.log("order: ", order);
    //     }
    //     this.setState({ orderArray: order });
    // }

