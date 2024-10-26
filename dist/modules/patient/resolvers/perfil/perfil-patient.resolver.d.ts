import { PatientProfileOutput } from '../../dtos/profile-patient.output';
import { ProfilePatientService } from '../../usecases/perfil/perfil-patitient.service';
export declare class ProfilePatientResolver {
    private readonly patientService;
    constructor(patientService: ProfilePatientService);
    PatientProfile(user: any): Promise<PatientProfileOutput>;
}
