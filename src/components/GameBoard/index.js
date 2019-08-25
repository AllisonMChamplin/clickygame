import React from 'react';
import "./style.css";
import GameCard from "../GameCard/";
import cardsJson from "../../cards.json";

class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameCardArray: [],
            score: 0,
            highScore: 0
        };
    }

    componentDidMount() {
        console.log("componentDidMount: ", this);
        let test = cardsJson.map(card => (
            <GameCard
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
                board={this}
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
            this.state.gameCardArray
        )
    }

    render() {
        return (
            this.state.gameCardArray
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

