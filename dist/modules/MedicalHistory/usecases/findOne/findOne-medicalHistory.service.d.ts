import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
export declare class FindOneMedicalHistoryService {
    private readonly medicalHistoryRepo;
    constructor(medicalHistoryRepo: IMedicalHistoryRepository);
    findOne(id: string): Promise<MedicalHistoryEntity>;
}
