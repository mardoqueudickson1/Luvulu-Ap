import { UpdatePatientService } from '../../usecases/update/update-patient.service';
import { UpdatePatientInput } from '../../dtos/update-patient.input';
import { Patients } from '../../entities/patient.entity';
export declare class UpdatePatientResolver {
    private readonly patientSerivce;
    constructor(patientSerivce: UpdatePatientService);
    updatePatient(data: UpdatePatientInput, user: any): Promise<Patients>;
}
