import { ResponsePatientOutput } from '../../dtos/reponsePatientOutput';
import { FindOnePatientService } from '../../usecases/findOne/findOne-patitient.service';
export declare class FindOnePatientResolver {
    private readonly patientService;
    constructor(patientService: FindOnePatientService);
    FindOnePatient(id: string): Promise<ResponsePatientOutput>;
}
