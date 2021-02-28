import { PLAYER_SYMBOL, ROOM } from "../globals/globals"
import { socket } from "./sockets"

export const handleClick = (e: any): void => {
    if (!e.target.innerText)
        socket.emit('turn', {
            symbol: PLAYER_SYMBOL,
            position: e.target.id.slice(-1),
            room: ROOM
        })
    e.target.disabled = true
}