import React, {useRef, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Board from './Board'
import {layout} from './layout';

function App() {
    const scoreRef = useRef(null);
    return (
        <div className="App" >
            <header className="header">
                Packman game
            </header>
            <Board />

            <h3>Score:<span ref={scoreRef} id="score" /></h3>
        </div>
    )
}

export default App;
