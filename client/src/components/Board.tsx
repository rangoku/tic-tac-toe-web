import { MouseEvent } from 'react'
import { PLAYER_SYMBOL } from '../globals/globals'

import '../styles/board.css'

export default function Board(): JSX.Element {

    const handleClick = (e: any): void => {
        document.querySelector('#' + e.target.id)!.innerHTML = PLAYER_SYMBOL
    }

    return (
        <div className="container">
            <div id="board">
                <button className="block" id="block_0" onClick={handleClick}></button>
                <button className="block" id="block_1" onClick={handleClick}></button>
                <button className="block" id="block_2" onClick={handleClick}></button>
                <button className="block" id="block_3" onClick={handleClick}></button>
                <button className="block" id="block_4" onClick={handleClick}></button>
                <button className="block" id="block_5" onClick={handleClick}></button>
                <button className="block" id="block_6" onClick={handleClick}></button>
                <button className="block" id="block_7" onClick={handleClick}></button>
                <button className="block" id="block_8" onClick={handleClick}></button>
            </div>
        </div>
    )
}