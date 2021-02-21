import { io } from "socket.io-client"
import { SERVER_URL, setPlayerSymbol, setRoom } from "../globals/globals"

export const socket = io(SERVER_URL)

export const initGeneralSockets = (): void => {

    socket.on('join-room', (room: string) => {
        setPlayerSymbol('O')
        setRoom(room)
    })

    socket.on('create-room', (room: string) => {
        document.getElementById("load")!.style.visibility = 'visible'
        setPlayerSymbol('X')
        setRoom(room)
    })

    socket.on('game-over', (winner: string) => {
        console.log('winner', winner)
    })
}

export const emitSocketEvent = (eventName: string, data?: any): void => {
    socket.emit(eventName, data)
}