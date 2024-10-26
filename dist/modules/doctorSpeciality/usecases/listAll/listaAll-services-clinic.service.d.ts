import { SpecialityResponse } from '../../dtos/specialiaty-output';
import { ISpecialityRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class ListAllSpecialityService {
    private readonly repo;
    constructor(repo: ISpecialityRepository);
    listAll(): Promise<SpecialityResponse[]>;
}
