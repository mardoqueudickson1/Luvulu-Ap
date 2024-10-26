import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { changePasswordInput } from '../../dtos/change-password';
import { Patients } from '../../entities/patient.entity';
export declare class UpdatePasswordService {
    private readonly repo;
    constructor(repo: IPatientRepository);
    update(data: changePasswordInput): Promise<Patients>;
    getPatientID(patientId: string): Promise<import("../../dtos/reponsePatientOutput").ResponseUser>;
}
