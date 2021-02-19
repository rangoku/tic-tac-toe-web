import { useEffect } from 'react'
import Socket from '../functions/Socket'
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
        Socket.initSockets()
    }, [])

    return (
        <div className={"container"}>
            <span
                style={styles_btn}
                onClick={(e) => Socket.emitSocketEvent('find-game')}
            >
                Play
            </span>
        </div>
    )
}

export default PlayButton