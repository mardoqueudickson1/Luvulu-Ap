import { AssociateDoctorInput } from '../../dtos/doctorInstitution';
import { AssociateDoctorService } from '../../usecases/associate-doctor/associate-doctor.service';
export declare class AssociateDoctorResolver {
    private readonly repo;
    constructor(repo: AssociateDoctorService);
    AssociateDoctor(user: any, input: AssociateDoctorInput): Promise<import("../../dtos/doctorInstitution").AssociateDoctorResponse>;
}
