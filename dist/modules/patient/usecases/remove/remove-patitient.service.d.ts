import { IPatientRepository } from '../../../patient/repository/interface/IPatientRepository';
export declare class RemovePatientService {
    private readonly patientRepo;
    constructor(patientRepo: IPatientRepository);
    remove(id: string): Promise<void>;
}
