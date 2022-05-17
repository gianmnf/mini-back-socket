import { io } from './http'
/* io.on('connection', socket => {
  console.log('foi')
  socket.on('connected', (socket) => {
    console.log(socket)
  })
  socket.on('disconnect', data => {
    try {
      const newArrayUsers = users.filter(user => user.socket_id !== socket.id)
      users = [...newArrayUsers]
      console.log(socket.id, data)
    } catch (error) {
      console.log({ error: error.message })
    }
  })
}) */