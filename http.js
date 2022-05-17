import { createServer } from 'http'
import { Server } from 'socket.io'
const serverHttp = createServer()
const io = new Server(serverHttp)
export { app, serverHttp, io }