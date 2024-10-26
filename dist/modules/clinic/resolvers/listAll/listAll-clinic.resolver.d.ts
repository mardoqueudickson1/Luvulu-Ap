import { ClinicOutput } from '../../dtos/findAll-clinic.output';
import { ListAllClinicService } from '../../usecases/listAll/listaAll-clinic.service';
export declare class ListAllClinicResolver {
    private readonly cliniService;
    constructor(cliniService: ListAllClinicService);
    findAllClinic(): Promise<ClinicOutput[]>;
}
