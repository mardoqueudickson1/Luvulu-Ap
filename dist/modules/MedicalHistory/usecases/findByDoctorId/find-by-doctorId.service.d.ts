import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
export declare class FindMedicalHistoryByDoctorIdService {
    private readonly medicalHistoryRepo;
    constructor(medicalHistoryRepo: IMedicalHistoryRepository);
    execute(doctorId: string): Promise<MedicalHistoryEntity[]>;
}
