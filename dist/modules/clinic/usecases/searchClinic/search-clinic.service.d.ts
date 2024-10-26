import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class SearchClinicService {
    private readonly clinicRepo;
    constructor(clinicRepo: IClinicRepository);
    Search(name: string, page: number): Promise<NearByclinicResponse[]>;
}
