const http = require('http')
const { Server } = require('socket.io')
const serverHttp = http.createServer()
const io = new Server(serverHttp)
io.on('connection', socket => {
  socket.on('teste', (data) => {
    console.log(data)
  })
  socket.on('disconnect', data => {
    try {
      console.log(socket.id, data)
    } catch (error) {
      console.log({ error: error.message })
    }
  })
})
serverHttp.listen(process.env.PORT || 3334, () => {
  // eslint-disable-next-line no-console
  console.log(`> Server running on port ${process.env.PORT || 3334}`)
})