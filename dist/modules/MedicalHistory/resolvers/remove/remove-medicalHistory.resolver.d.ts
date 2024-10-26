import { RemoveHistoryMedicalService } from '../../usecases/remove/remove-historyMedical.service';
export declare class RemoveMedicalHistoryResolver {
    private readonly medicalService;
    constructor(medicalService: RemoveHistoryMedicalService);
    removeMedicalHistory(id: string): Promise<void>;
}
