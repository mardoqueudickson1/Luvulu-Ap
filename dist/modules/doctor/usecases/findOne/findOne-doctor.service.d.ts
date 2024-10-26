import { ResponseDoctor } from '../../dtos/response-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class FindOneDoctorService {
    private readonly doctortRepo;
    constructor(doctortRepo: IDoctorRepository);
    findOne(id: string): Promise<ResponseDoctor>;
}
