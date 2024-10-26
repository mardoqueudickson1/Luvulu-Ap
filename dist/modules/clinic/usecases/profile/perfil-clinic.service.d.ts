import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class ProfileClinicService {
    private readonly clinicRepo;
    constructor(clinicRepo: IClinicRepository);
    profile(id: string): Promise<ProfileClinicOutput>;
}
