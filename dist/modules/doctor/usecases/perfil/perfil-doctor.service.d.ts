import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';
export declare class ProfileDoctorService {
    private readonly doctor;
    constructor(doctor: IDoctorRepository);
    profile(id: string): Promise<ResponseProfileDoctor>;
}
