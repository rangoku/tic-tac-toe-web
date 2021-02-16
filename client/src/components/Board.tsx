import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/board.css'
import Block from './Block'

export default function Board(): JSX.Element {
    return (
        <div className="container">
            <div id="board">
                <div id={`block_0`} className="block"></div>
                <div id="block_1" className="block"></div>
                <div id="block_2" className="block"></div>
                <div id="block_3" className="block"></div>
                <div id="block_4" className="block"></div>
                <div id="block_5" className="block"></div>
                <div id="block_6" className="block"></div>
                <div id="block_7" className="block"></div>
                <div id="block_8" className="block"></div>
            </div>
        </div>
    )
}