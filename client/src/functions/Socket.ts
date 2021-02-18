import { io } from "socket.io-client"
import { SERVER_URL, setPlayerSymbol, setRoom } from "../globals/globals"

export default class Socket {

    static readonly socket = io(SERVER_URL)

    public static initSockets(): void {

        Socket.socket.on('join-room', (room: string) => {
            setPlayerSymbol('O')
            setRoom(room)
        })

        Socket.socket.on('create-room', (room: string) => {
            setPlayerSymbol('X')
            setRoom(room)
        })

        Socket.socket.on('start-game', (first_turn: string) => {
            console.log(first_turn)
        })

        Socket.socket.on('turn', (turn: { position: number, symbol: string }) => {
            document.querySelector('#block_' + turn.position)!.innerHTML = turn.symbol
        })

        Socket.socket.on('game-over', (winner: string) => {
            // TODO
        })
    }

    public static emitSocketEvent(eventName: string, data?: any): void {
        Socket.socket.emit(eventName, data)
    }
}