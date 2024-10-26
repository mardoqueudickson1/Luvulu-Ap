import { ResponsePatientOutput } from '../../dtos/reponsePatientOutput';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
export declare class FindOnePatientService {
    private readonly patitientRepo;
    constructor(patitientRepo: IPatientRepository);
    findOne(id: string): Promise<ResponsePatientOutput>;
}
