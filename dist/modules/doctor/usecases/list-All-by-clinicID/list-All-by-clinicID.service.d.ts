import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class ListAllDoctorByclinicIDService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    listAllByClinicID(clinicId: string): Promise<ResponseAllDoctor[]>;
}
