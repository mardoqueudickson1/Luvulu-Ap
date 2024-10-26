import { AssociateDoctorInput } from '../../dtos/doctorInstitution';
import { DesasociateDoctorService } from '../../usecases/desasociate-doctor/desasociate-doctor.service';
export declare class DesasociateDoctorResolver {
    private readonly repo;
    constructor(repo: DesasociateDoctorService);
    desasociateDoctor(user: any, input: AssociateDoctorInput): Promise<{
        message: string;
    }>;
}
