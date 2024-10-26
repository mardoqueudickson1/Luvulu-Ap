import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { PatientProfileOutput } from '../../dtos/profile-patient.output';
export declare class ProfilePatientService {
    private readonly patitientRepo;
    constructor(patitientRepo: IPatientRepository);
    profile(id: string): Promise<PatientProfileOutput>;
}
