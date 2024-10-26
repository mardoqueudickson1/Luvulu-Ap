import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import { ListAllPatientService } from '../../usecases/listAll/listaAll-patitient.service';
export declare class ListAllPatientResolver {
    private readonly patientService;
    constructor(patientService: ListAllPatientService);
    findAllPatient(): Promise<FindAllPatientResponse[]>;
}
