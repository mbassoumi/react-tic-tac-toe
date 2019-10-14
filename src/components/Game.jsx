import React, {useState} from 'react';
import Board from './Board';


const Game = () => {
    const [nextValueState, setNextValueState] = useState(true);

    const [historyState, setHistoryState] = useState(
        [
            {
                squares: Array(9).fill(null)
            }
        ]
    );
    const [nextStepState, setNextStepState] = useState(0);

    const handleSquareClick = (index) => {
        const history = historyState.slice(0, nextStepState + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = values[nextValueState];

        setNextValueState(((nextStepState + 1) % 2 === 0));
        setHistoryState(
            history.concat([
                {
                    squares: squares
                }
            ])
        );
        setNextStepState(nextStepState + 1);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const backToStep = (step) => {
        setNextStepState(step);
        setNextValueState((step % 2 === 0));
    };

    const values = {
        true: 'X',
        false: 'Y'
    };

    const history = historyState.slice(0, nextStepState + 1);
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner is ${winner}` : `Next player: ${values[nextValueState]}`;

    const moves = history.slice(0, history.length - 1).map((step, move) => (
            <li key={move}>
                <button
                    onClick={backToStep.bind(this, move)}>{move ? `Back to move ${move}` : 'Back to start of the game'}</button>
            </li>
        )
    );

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={handleSquareClick}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;
