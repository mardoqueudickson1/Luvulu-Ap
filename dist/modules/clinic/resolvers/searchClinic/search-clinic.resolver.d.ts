import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { SearchClinicService } from '../../usecases/searchClinic/search-clinic.service';
export declare class FindSearchClinicResolver {
    private readonly repo;
    constructor(repo: SearchClinicService);
    SearchClinic(name: string, page: number): Promise<NearByclinicResponse[]>;
}
