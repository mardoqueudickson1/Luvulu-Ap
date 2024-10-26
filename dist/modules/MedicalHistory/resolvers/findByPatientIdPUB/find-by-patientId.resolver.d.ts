import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
import { FindMedicalHistoryByPatientIdPUBService } from '../../usecases/getByPatientIdPUB/find-by-patientId.service';
export declare class FindMedicalHistoryByPatientIdPUBResolver {
    private readonly repo;
    constructor(repo: FindMedicalHistoryByPatientIdPUBService);
    findOneMedicalHistoryPUB(id: string): Promise<GetMedicalHsitoryByPatientIdOutput[]>;
}
