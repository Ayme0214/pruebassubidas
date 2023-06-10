import { Socket } from 'socket.io';
import { Paciente } from '../paciente/entities/paciente.entity';
import { Repository } from 'typeorm';
import { PacienteService } from 'src/paciente/paciente.service';
export declare class MensajesWsService {
    private readonly pacienteRepository;
    private readonly pacienteService;
    private connectedClients;
    constructor(pacienteRepository: Repository<Paciente>, pacienteService: PacienteService);
    registerClient(client: Socket, name: string): Promise<void>;
    removeClient(clientId: string): void;
    getConnectedClients(): string[];
    getStudentFullName(id: string): string;
}
