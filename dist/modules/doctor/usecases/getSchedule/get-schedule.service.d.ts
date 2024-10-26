import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class GetScheduleDoctorByIdService {
    private readonly doctortRepo;
    constructor(doctortRepo: IDoctorRepository);
    execute(id: string): Promise<any>;
}
