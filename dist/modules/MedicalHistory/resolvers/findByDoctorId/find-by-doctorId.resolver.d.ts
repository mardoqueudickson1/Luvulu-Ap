import { FindMedicalHistoryByDoctorIdService } from '../../usecases/findByDoctorId/find-by-doctorId.service';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
export declare class FindMedicalHistoryByDoctoryIdResolver {
    private readonly medicalHistoryService;
    constructor(medicalHistoryService: FindMedicalHistoryByDoctorIdService);
    findMedicalHistoryByDoctorId(id: string): Promise<MedicalHistoryEntity[]>;
}
