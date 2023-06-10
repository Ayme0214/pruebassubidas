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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajesWsService = void 0;
const common_1 = require("@nestjs/common");
const paciente_entity_1 = require("../paciente/entities/paciente.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const paciente_service_1 = require("../paciente/paciente.service");
let MensajesWsService = class MensajesWsService {
    constructor(pacienteRepository, pacienteService) {
        this.pacienteRepository = pacienteRepository;
        this.pacienteService = pacienteService;
        this.connectedClients = {};
    }
    async registerClient(client, name) {
        console.log(this.pacienteService.prueba());
        const paciente = await this.pacienteRepository.findOneBy({ nombre: name });
        if (!paciente)
            throw new Error('Estudiante no encontrado');
        if (!paciente.estado)
            throw new Error('No activo');
        this.connectedClients[client.id] = { socket: client, paciente: paciente };
    }
    removeClient(clientId) {
        delete this.connectedClients[clientId];
    }
    getConnectedClients() {
        return Object.keys(this.connectedClients);
    }
    getStudentFullName(id) {
        return this.connectedClients[id].paciente.nombre;
    }
};
MensajesWsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(paciente_entity_1.Paciente)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        paciente_service_1.PacienteService])
], MensajesWsService);
exports.MensajesWsService = MensajesWsService;
//# sourceMappingURL=mensajes-ws.service.js.map