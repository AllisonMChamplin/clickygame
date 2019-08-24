import React from 'react';
import "./style.css";
import GameCard from "../GameCard/";
import cardsJson from "../../cards.json";

const card = cardsJson[0];

class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true,
            gameCardArray: [],
            orderArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            score: 0,
            highScore: 0
        };
        console.log("card", card);
    }

    componentDidMount() {
        console.log("componentDidMount: ", this);
        this.initializeGameCards();
    }

    initializeGameCards() {
        //     let x = cardsJson.map(card => (
        //         <GameCard
        //             id={card.id}
        //             key={card.id}
        //             name={card.name}
        //             image={card.image}
        //         />
        //     ))
        //     this.setState({
        //         gameCardArray: x
        //     });
        //     console.log("x: ", x)
        this.updateBoard();
    }

    updateBoard() {
        //     // this.setState({
        //     //     gameCardArray: x
        //     // });
        return (
            <GameCard
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
            />
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

