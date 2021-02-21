import { useEffect, useRef, useState } from 'react'
import { handleClick } from '../functions/handleClick'
import { socket } from '../functions/sockets'
import { PLAYER_SYMBOL, ROOM } from '../globals/globals'

import '../styles/board.css'

const style_text: React.CSSProperties = {
    color: '#06C305',
    fontSize: 75,
    visibility: 'hidden'
}

const Loading = (): JSX.Element => {
    return (
        <>
            <span id="load" style={style_text}>SEARCHING FOR OPPONENT</span>
        </>
    )
}

export default function Board(): JSX.Element {

    const [game, setGame] = useState(false)

    const boardRef = useRef<HTMLDivElement>(null)

    const btn0 = useRef<HTMLButtonElement>(null)
    const btn1 = useRef<HTMLButtonElement>(null)
    const btn2 = useRef<HTMLButtonElement>(null)
    const btn3 = useRef<HTMLButtonElement>(null)
    const btn4 = useRef<HTMLButtonElement>(null)
    const btn5 = useRef<HTMLButtonElement>(null)
    const btn6 = useRef<HTMLButtonElement>(null)
    const btn7 = useRef<HTMLButtonElement>(null)
    const btn8 = useRef<HTMLButtonElement>(null)

    let board: Array<JSX.Element> = []

    for (let i: number = 0; i < 9 /*cells number*/; ++i)
        board[i] = (
            <button
                key={i}
                ref={eval(`btn${i}`)}
                className={"block"}
                id={`block_${i}`}
                onClick={handleClick}>
            </button>
        )

    useEffect(() => {

        socket.on('start-game', (first_turn: string) => {
            setGame(true)
        })

        socket.on('turn', (turn: { position: number, symbol: string }) => {
            eval(`btn${turn.position}`).current!.innerHTML = turn.symbol

            if (turn.symbol !== PLAYER_SYMBOL)
                boardRef.current!.style.pointerEvents = 'auto'
            else
                boardRef.current!.style.pointerEvents = 'none'
        })
    }, [])

    return (
        <>
            <div className="container">
                {
                    game ?
                        <div id="board" ref={boardRef}>{board}</div>
                        : <Loading />
                }
            </div>
        </>
    )
}