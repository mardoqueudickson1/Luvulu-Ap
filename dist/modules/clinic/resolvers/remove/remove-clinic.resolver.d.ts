import { RemoveClinicService } from '../../usecases/remove/remove-patitient.service';
export declare class RemoveClinicResolver {
    private readonly clinicService;
    constructor(clinicService: RemoveClinicService);
    removePatient(id: string): Promise<void>;
}
