import React, { MouseEvent } from 'react'
import ReactDOM from 'react-dom'
import { PLAYER_SYMBOL } from '../globals/globals'

import '../styles/board.css'
import Block from './Block'

export default function Board(): JSX.Element {

    const handleClick = (e: MouseEvent<HTMLButtonElement>, index: string): void => {
        document.querySelector('#block_' + index)!.innerHTML = PLAYER_SYMBOL
    }

    return (
        <div className="container">
            <div id="board">
                <button className="block" id="block_0" onClick={(e) => handleClick(e, '0')}></button>
                <button className="block" id="block_1" onClick={(e) => handleClick(e, '1')}></button>
                <button className="block" id="block_2" onClick={(e) => handleClick(e, '2')}></button>
                <button className="block" id="block_3" onClick={(e) => handleClick(e, '3')}></button>
                <button className="block" id="block_4" onClick={(e) => handleClick(e, '4')}></button>
                <button className="block" id="block_5" onClick={(e) => handleClick(e, '5')}></button>
                <button className="block" id="block_6" onClick={(e) => handleClick(e, '6')}></button>
                <button className="block" id="block_7" onClick={(e) => handleClick(e, '7')}></button>
                <button className="block" id="block_8" onClick={(e) => handleClick(e, '8')}></button>
            </div>
        </div>
    )
}