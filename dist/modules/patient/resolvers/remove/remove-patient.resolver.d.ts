import { RemovePatientService } from '../../../patient/usecases/remove/remove-patitient.service';
export declare class RemovePatientResolver {
    private readonly patientService;
    constructor(patientService: RemovePatientService);
    removePatient(id: string): Promise<void>;
}
