import React from "react";

class Reset extends React.Component {
    // Setting the initial state of the Reset component
    state = {
        amIVisible: false
    };

    // The render method returns the JSX that should be rendered
    render() {
        return (
            <button className='btn'>Reset Game!</button>
        );
    }
}

export default Reset;

{/* <button onClick={props.resetGame} className='btn'>Reset Game!</button> */}
