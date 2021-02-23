import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { initGeneralSockets, socket } from '../functions/sockets'

import '../styles/board.css'
import '../styles/styles.css'

const PlayButton = (): JSX.Element => {

    useEffect(() => {
        initGeneralSockets()
    }, [])

    const startGame = (e: any) => {
        socket.emit('find-game')
    }

    return (
        <div className={"container"}>
            <NavLink to='/game'>
                <span
                    className={"__default__font-style cursor-pointer"}
                    onClick={startGame}
                >
                    Play
            </span>
            </NavLink>
        </div>
    )
}

export default PlayButton