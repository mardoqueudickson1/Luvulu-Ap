import { InstitutionIResponse } from '../../dtos/response-all-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class listClinicOfDoctorService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    listClinicOfDoctor(id: string): Promise<InstitutionIResponse[]>;
}
