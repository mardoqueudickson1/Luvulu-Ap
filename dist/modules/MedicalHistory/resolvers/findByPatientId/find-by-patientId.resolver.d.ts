import { FindMedicalHistoryByPatientIdService } from '../../usecases/getByPatientId/find-by-patientId.service';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
export declare class FindMedicalHistoryByPatientIdResolver {
    private readonly medicalHistoryService;
    constructor(medicalHistoryService: FindMedicalHistoryByPatientIdService);
    findOneMedicalHistory(id: string): Promise<GetMedicalHsitoryByPatientIdOutput[]>;
}
