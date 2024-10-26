import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { Specialities } from '../../entities/specialiaty.entity';
import { CreateSpecialityService } from '../../usecases/create/create-services-clinic.service';
export declare class CreateSpecialityResolver {
    private readonly servicesRepo;
    constructor(servicesRepo: CreateSpecialityService);
    createSpeciality(input: CreateSpecialityInput): Promise<Specialities>;
}
