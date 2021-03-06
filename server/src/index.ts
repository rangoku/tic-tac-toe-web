import express from 'express'
import http from 'http'
import CorsConfig from './config/corsConfig'
import checkWin from './game'
import logger from './logger/logger'
import { Board } from './types/board'
import { PlayerSymbol, Turn } from './types/in_game'

const app = express()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: CorsConfig.CLIENT_ORIGIN
    }
})

let openRoom: string | null = null // rooms that can be joined

io.on('connection', (socket: any) => {

    socket.on('find-game', () => {

        logger.info(socket.conn.id + " :: find-game")

        if (openRoom) { // if join existed room => plays with 'O'
            const room = openRoom
            openRoom = null

            socket.join(room)
            socket.emit('join-room', room)

            io.to(room).emit('start-game', /*first turn*/(Math.floor(Math.random() * 2) + 1) % 2 === 0 ? 'X' : 'O')

            logger.info('[room::' + room + "] :: game starts")
        }
        else { // plays with 'X'
            const newRoomID = 'room_' + Date.now() + Math.random()
            openRoom = newRoomID

            socket.join(newRoomID)
            socket.emit('create-room', newRoomID)

            logger.info(socket.conn.id + " :: create-room")
        }
    })

    socket.on('turn', (data: Turn) => {
        io.to(data.room).emit('turn', {
            position: data.position,
            symbol: data.symbol
        })
    })

    socket.on('check-win', (data: {
        symbol: PlayerSymbol,
        board: Board,
        room: string
    }) => {
        const comb = checkWin(data.symbol, data.board)

        if (comb && comb !== 'draw') {
            io.to(data.room).emit('game-over', {
                winner: data.symbol,
                combination: comb
            })
            logger.info("[room::" + data.room + "] :: game-over :: " + "comb :: " + comb)
        }
        else if (comb === 'draw') {
            io.to(data.room).emit('draw')
            logger.info("room::" + data.room + "] :: draw")
        }
    })

    socket.on('disconnecting', () => {
        let it: Iterator<string> = socket.rooms.values()
        it.next()
        const room = it.next().value
        console.log(room)

        socket.broadcast.to(room).emit('opponent-disconnected')

        if (io.sockets.adapter.rooms.get(room).length < 2) // person disconnected while waiting for opponent
            openRoom = null
    })

})

server.listen(PORT, () => console.log('Server listening on PORT: ' + PORT))
