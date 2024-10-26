import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { AssociateDoctorInput, AssociateDoctorResponse } from '../../dtos/doctorInstitution';
export declare class AssociateDoctorService {
    private repo;
    constructor(repo: IDoctorRepository);
    associateDoctor(data: AssociateDoctorInput): Promise<AssociateDoctorResponse>;
}
