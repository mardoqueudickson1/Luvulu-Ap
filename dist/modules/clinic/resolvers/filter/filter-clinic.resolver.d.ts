import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { FilterClinicService } from '../../usecases/filter/filter-clinic.service';
import { FilterOptions } from '../../dtos/clinic-filter-option';
export declare class FilterClinicResolver {
    private readonly repo;
    constructor(repo: FilterClinicService);
    filterClinic(filterOptions: FilterOptions): Promise<NearByclinicResponse[]>;
}
