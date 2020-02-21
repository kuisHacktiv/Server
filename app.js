require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.on('createRoom', function(room) {
    socket.join(room.roomname)
    io.emit('joined', room)
  })
})

http.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})
