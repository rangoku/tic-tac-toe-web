import turn, { getBoard } from './game'
import io from './index'
import { Turn } from './types/in_game'

let openRooms: string[] = [] // rooms that can be joined

io.on('connection', (socket: any) => {

    socket.on('find-game', () => {

        if (openRooms) { // if join existed room => plays with 'O'
            const room = openRooms.pop()
            socket.join(room)

            socket.emit('join-room', room)

            io.to(room).emit('start-game', /*first turn*/ Math.random() % 2 === 0 ? 'X' : 'O')
        }
        else { // plays with 'X'
            const newRoomID = 'room_' + Date.now() + Math.random()
            openRooms!.push(newRoomID)
            socket.join(newRoomID)

            socket.emit('create-room', newRoomID)
        }
    })

    socket.on('turn', (data: Turn) => {
        if (turn(data)) { // => player wins

            io.to(data.room).emit('turn', {
                position: data.position,
                symbol: data.symbol
            })

            io.to(data.room).emit('game-over', /*winner: */data.symbol)

            return
        }

        io.to(data.room).emit('turn', {
            position: data.position,
            symbol: data.symbol
        })
    })
})
