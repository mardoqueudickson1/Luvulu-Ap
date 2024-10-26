import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
export declare class RemoveHistoryMedicalService {
    private readonly medicalHistoryRepo;
    constructor(medicalHistoryRepo: IMedicalHistoryRepository);
    remove(id: string): Promise<void>;
}
