import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./components/Game";


class Index extends Component {
    render() {
        return (
            <Game/>
        )
    }
}


// ========================================

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
