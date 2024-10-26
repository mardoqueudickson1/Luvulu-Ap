import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { AssociateDoctorInput } from '../../dtos/doctorInstitution';
export declare class DesasociateDoctorService {
    private repo;
    constructor(repo: IDoctorRepository);
    desasociateDoctor(data: AssociateDoctorInput): Promise<{
        message: string;
    }>;
}
