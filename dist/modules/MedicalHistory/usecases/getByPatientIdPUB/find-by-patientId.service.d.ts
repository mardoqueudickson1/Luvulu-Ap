import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
export declare class FindMedicalHistoryByPatientIdPUBService {
    private readonly repo;
    constructor(repo: IMedicalHistoryRepository);
    execute(id: string): Promise<GetMedicalHsitoryByPatientIdOutput[]>;
}