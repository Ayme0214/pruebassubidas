import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
export declare class PacienteService {
    private readonly pacienteRepository;
    private readonly logger;
    constructor(pacienteRepository: Repository<Paciente>);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: string): Promise<Paciente>;
    update(id: string, updatePacienteDto: UpdatePacienteDto): Promise<Paciente>;
    remove(id: string): Promise<void>;
    prueba(): String[];
}
