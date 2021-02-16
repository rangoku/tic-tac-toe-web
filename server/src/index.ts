import express from 'express'
import http from 'http'

const app = express()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

const io = require('socket.io')(server)

server.listen(PORT, () => console.log('Server listening on PORT: ' + PORT))

export default io