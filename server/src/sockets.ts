import turn, { getBoard } from './game'
import io from './index'
import { Turn } from './types/in_game'

let openRooms: string[] = [] // rooms that can be joined

io.on('connection', (socket: any) => {

    socket.on('find-game', () => {

        if (openRooms) { // if join existed room => plays with 'O'
            const room = openRooms.pop()
            socket.join(room)

            socket.emit('joined-room', {
                symbol: 'O',
                room: room
            })

            io.to(room).emit('start-game', {
                first_turn: Math.random() % 2 === 0 ? 'X' : 'O'
            })
        }
        else { // plays with 'X'
            const newRoomID = 'room_' + Date.now() + Math.random()
            openRooms!.push(newRoomID)
            socket.join(newRoomID)

            socket.emit('create-room', {
                symbol: 'X',
                room: newRoomID
            })
        }
    })

    socket.on('turn', (data: Turn): void => {
        if (turn(data)) { // => player wins

            io.to(data.room).emit('turn', {
                board: getBoard()
            })

            io.to(data.room).emit('game-over', {
                winner: data.symbol
            })

            return
        }
        io.to(data.room).emit('turn', {
            board: getBoard()
        })
    })
})
