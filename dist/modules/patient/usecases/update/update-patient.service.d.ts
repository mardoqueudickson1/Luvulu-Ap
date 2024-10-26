import { Patients } from '../../entities/patient.entity';
import { UpdatePatientInput } from '../../dtos/update-patient.input';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
export declare class UpdatePatientService {
    private readonly repo;
    constructor(repo: IPatientRepository);
    update(data: UpdatePatientInput): Promise<Patients>;
    getPatientID(patientId: string): Promise<import("../../dtos/reponsePatientOutput").ResponseUser>;
}
