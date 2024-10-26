import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
export declare class ListAllPatientService {
    private readonly patitientRepo;
    constructor(patitientRepo: IPatientRepository);
    listAll(): Promise<FindAllPatientResponse[]>;
}
