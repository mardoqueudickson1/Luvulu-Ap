import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { ISpecialityRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class CreateSpecialityService {
    private readonly repo;
    constructor(repo: ISpecialityRepository);
    create(input: CreateSpecialityInput): Promise<import("../../entities/specialiaty.entity").Specialities>;
}
