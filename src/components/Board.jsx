import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const Board = ({ squares, onClick }) => {
  const renderSquare = (index) => (
    <Square
      value={squares[index]}
      onClick={onClick.bind(this, index)}
    />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func
};
export default Board;
