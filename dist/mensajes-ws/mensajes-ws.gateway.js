"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajesWsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const mensajes_ws_service_1 = require("./mensajes-ws.service");
const socket_io_1 = require("socket.io");
const new_message_dto_1 = require("./dtos/new-message.dto");
const common_1 = require("@nestjs/common");
let MensajesWsGateway = class MensajesWsGateway {
    constructor(mensajesWsService) {
        this.mensajesWsService = mensajesWsService;
        this.listaDeUsuarios = ['Ayme', 'prueba'];
    }
    async handleConnection(client) {
        const token = client.handshake.headers.authentication;
        let payload;
        try {
            if (!this.listaDeUsuarios.includes(token))
                throw new common_1.BadRequestException('prueba');
            payload = token;
            await this.mensajesWsService.registerClient(client, payload);
        }
        catch (error) {
            client.disconnect();
            return;
        }
        this.wss.emit('clients-updated', this.mensajesWsService.getConnectedClients());
    }
    handleDisconnect(client) {
        this.mensajesWsService.removeClient(client.id);
        this.wss.emit('clients-updated', this.mensajesWsService.getConnectedClients());
    }
    onMessageFromClient(client, payload) {
        this.wss.emit('message-from-server', {
            fullName: this.mensajesWsService.getStudentFullName(client.id),
            message: payload.message || 'nada'
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MensajesWsGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message-from-client'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, new_message_dto_1.NewMessageDto]),
    __metadata("design:returntype", void 0)
], MensajesWsGateway.prototype, "onMessageFromClient", null);
MensajesWsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [mensajes_ws_service_1.MensajesWsService])
], MensajesWsGateway);
exports.MensajesWsGateway = MensajesWsGateway;
//# sourceMappingURL=mensajes-ws.gateway.js.map