import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class RemoveDoctorService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    remove(id: string): Promise<void>;
}
