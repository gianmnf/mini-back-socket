import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
@Module({
  providers: [SocketGateway],
  exports: [SocketGateway],
})
export class SocketModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
