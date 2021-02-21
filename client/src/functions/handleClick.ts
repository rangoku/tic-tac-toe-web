import { PLAYER_SYMBOL, ROOM } from "../globals/globals"
import { emitSocketEvent, socket } from "./sockets"

export const handleClick = (e: any): void => {
    if (!e.target.innerText)
        emitSocketEvent('turn', {
            symbol: PLAYER_SYMBOL,
            position: e.target.id.slice(-1),
            room: ROOM
        })
    e.target.disabled = true
}

