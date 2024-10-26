import { FindOneMedicalHistoryService } from '../../usecases/findOne/findOne-medicalHistory.service';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
export declare class FindOneMedicalHistoryResolver {
    private readonly medicalHistoryService;
    constructor(medicalHistoryService: FindOneMedicalHistoryService);
    findOneMedicalHistory(id: string): Promise<MedicalHistoryEntity>;
}
