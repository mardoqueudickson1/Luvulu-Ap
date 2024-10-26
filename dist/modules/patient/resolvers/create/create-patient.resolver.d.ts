import { CreatePatientInput } from '../../../patient/dtos/create-patient.input';
import { Patients } from '../../entities/patient.entity';
import { CreatePatientService } from '../../usecases/create/create-patient.service';
export declare class CreatePatientResolver {
    private readonly patientService;
    constructor(patientService: CreatePatientService);
    createPatient(createPatientInput: CreatePatientInput): Promise<Patients>;
}
