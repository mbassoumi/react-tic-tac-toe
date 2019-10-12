import React, {Component} from 'react';
import Board from "./Board";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.values = {
            true: 'X',
            false: 'Y'
        };
        this.state = {
            nextValue: true,
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            nextStep: 0,

        }
    }


    render() {

        const history = this.state.history.slice(0, this.state.nextStep + 1);
        const current = history[history.length - 1];
        const winner = this.calculateWinner(current.squares);
        let status = winner ? `Winner is ${winner}` : `Next player: ${this.values[this.state.nextValue]}`;


        const moves = history.slice(0, history.length - 1).map((step, move) => (
                <li key={move}>
                    <button onClick={this.backToStep.bind(this, move)}>{move ? `Back to move ${move}` : 'Back to start of the game'}</button>
                </li>
            )
        );


        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={this.handleSquareClick}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    handleSquareClick = (index) => {
        const history = this.state.history.slice(0, this.state.nextStep + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = this.values[this.state.nextValue];

        this.setState((state, props) => (
            {
                nextValue: ((state.nextStep + 1) % 2 === 0),
                history: history.concat([
                    {
                        squares: squares
                    }
                ]),
                nextStep: state.nextStep + 1
            }
        ))
    };

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    backToStep = (step) => {
        this.setState((state) => (
            {
                nextStep: step,
                nextValue: (step % 2 === 0)
            }
        ));
    }
}