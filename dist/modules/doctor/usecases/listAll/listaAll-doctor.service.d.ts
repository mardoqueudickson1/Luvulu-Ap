import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class ListAllDoctorService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    listAll(): Promise<ResponseAllDoctor[]>;
}
