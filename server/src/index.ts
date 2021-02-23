import express from 'express'
import http from 'http'
import checkWin from './game'

import turn from './game'
import { Board } from './types/board'
import { PlayerSymbol, Turn } from './types/in_game'

const app = express()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

let openRooms: string[] = [] // rooms that can be joined

io.on('connection', (socket: any) => {

    console.log('connected')

    socket.on('find-game', () => {

        console.log('f-g')

        if (openRooms.length > 0) { // if join existed room => plays with 'O'
            const room = openRooms.pop()
            socket.join(room)

            socket.emit('join-room', room)

            console.log('has open: ', room)

            io.to(room).emit('start-game', /*first turn*/(Math.floor(Math.random() * 2) + 1) % 2 === 0 ? 'X' : 'O')
        }
        else { // plays with 'X'
            const newRoomID = 'room_' + Date.now() + Math.random()
            openRooms!.push(newRoomID)
            socket.join(newRoomID)

            socket.emit('create-room', newRoomID)

            console.log('created:', newRoomID)
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

        console.log(comb)

        if (comb !== null) {
            io.to(data.room).emit('game-over', {
                winner: data.symbol,
                combination: comb
            })
        }
    })

})

server.listen(PORT, () => console.log('Server listening on PORT: ' + PORT))

//export default io