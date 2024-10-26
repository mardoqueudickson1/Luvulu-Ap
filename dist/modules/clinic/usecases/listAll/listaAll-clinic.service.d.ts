import { ClinicOutput } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class ListAllClinicService {
    private readonly clinicRepo;
    constructor(clinicRepo: IClinicRepository);
    listAll(): Promise<ClinicOutput[]>;
}
