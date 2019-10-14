import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';

const Index = () => {
  return (
    <Game/>
  );
};

// ========================================

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
