import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Connection } from 'typeorm';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection {
  constructor(private connection: Connection) {}

  @WebSocketServer()
  private socket: Socket;

  handleConnection(socket: Socket) {
    try {
      console.log('handleConnection: ', socket);
    } catch (error) {
      console.log('handleConnectionError: ', error);
      socket.disconnect();
    }
  }

  handleDisconnect(socket: Socket) {
    try {
      console.log('handleDisconnect: ', socket);
    } catch (error) {
      console.log('handleDisconnectError: ', error);
    }
  }
}
