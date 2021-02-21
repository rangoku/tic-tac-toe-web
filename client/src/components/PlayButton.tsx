import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { emitSocketEvent, initGeneralSockets } from '../functions/sockets'

import '../styles/board.css'

const styles_btn: React.CSSProperties = {
    fontSize: 75,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#06C305',
    cursor: 'pointer'
}

const PlayButton = (): JSX.Element => {

    useEffect(() => {
        initGeneralSockets()
    }, [])

    const startGame = (e: any) => {
        emitSocketEvent('find-game')
    }

    return (
        <div className={"container"}>
            <NavLink to='/game'>
                <span
                    style={styles_btn}
                    onClick={startGame}
                >
                    Play
            </span>
            </NavLink>
        </div>
    )
}

export default PlayButton