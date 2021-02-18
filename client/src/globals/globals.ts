import { maxHeaderSize } from "http"
import { PlayerSymbol } from "../types/player"

// config
export const SERVER_URL = 'http://localhost:5000'

// player
let PLAYER_SYMBOL: PlayerSymbol
let ROOM: string | undefined

const setPlayerSymbol = (symbol: PlayerSymbol): void => {
    PLAYER_SYMBOL = symbol
}

const setRoom = (room: string | undefined): void => {
    ROOM = room
}


export { PLAYER_SYMBOL, setPlayerSymbol }
export { ROOM, setRoom }