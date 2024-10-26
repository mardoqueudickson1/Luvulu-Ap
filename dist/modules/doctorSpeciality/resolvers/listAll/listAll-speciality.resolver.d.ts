import { ListAllSpecialityService } from '../../usecases/listAll/listaAll-services-clinic.service';
import { SpecialityResponse } from '../../dtos/specialiaty-output';
export declare class FindAllSpecialityResolver {
    private readonly servicesRepo;
    constructor(servicesRepo: ListAllSpecialityService);
    findALlSpeciality(): Promise<SpecialityResponse[]>;
}
