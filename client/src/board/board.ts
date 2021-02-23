import { socket } from "../functions/sockets";
import { PLAYER_SYMBOL, ROOM } from "../globals/globals";
import { Board } from "../types/board";
import { PlayerSymbol } from "../types/player";

let board: Board = [
    'None', 'None', 'None',
    'None', 'None', 'None',
    'None', 'None', 'None'
]

const setBoardCell = (position: number, symbol: Exclude<PlayerSymbol, undefined>): void => {
    board[position] = symbol

    if (symbol === PLAYER_SYMBOL)
        socket.emit('check-win', {
            symbol: PLAYER_SYMBOL,
            board,
            room: ROOM
        })
}

export { board, setBoardCell }