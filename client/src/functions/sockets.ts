import { io } from "socket.io-client"
import { SERVER_URL, setPlayerSymbol, setRoom } from "../globals/globals"

export const socket = io(SERVER_URL)

export const initGeneralSockets = (): void => {

    socket.on('join-room', (room: string) => {
        setPlayerSymbol('O')
        setRoom(room)
    })

    socket.on('create-room', (room: string) => {
        document.querySelector(".visibility-hidden")!.classList.remove('visibility-hidden')
        setPlayerSymbol('X')
        setRoom(room)
    })
}
