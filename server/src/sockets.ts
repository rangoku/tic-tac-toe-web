import io from './index'

interface Turn {
    symbol: string,
    position: number
}

let openRooms: string[] = [] // rooms that can be joined

io.on('connection', (socket: any) => {

    socket.on('find-game', () => {

        if (openRooms) { // if joined existed room -> plays with 'O'
            const room = openRooms.pop()
            socket.join(room)

            socket.emit('joined-game', {
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

            socket.emit('joined-room', {
                symbol: 'X',
                room: newRoomID
            })
        }
    })
})
