import { ResponseClinic } from '../../dtos/clinicReponse';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class FindOneClinicService {
    private readonly clinicRepo;
    constructor(clinicRepo: IClinicRepository);
    findOne(id: string): Promise<ResponseClinic>;
}
