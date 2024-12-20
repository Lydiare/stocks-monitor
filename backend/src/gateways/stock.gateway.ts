import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class StockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  // @WebSocketServer() server: Server;

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }

  // sendStockUpdate(data: any) {
  //   this.server.emit('stockUpdate', data); // Notify all connected clients
  // }
}
