import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MensajesWsService } from './mensajes-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
export declare class MensajesWsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly mensajesWsService;
    listaDeUsuarios: string[];
    wss: Server;
    constructor(mensajesWsService: MensajesWsService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    onMessageFromClient(client: Socket, payload: NewMessageDto): void;
}
