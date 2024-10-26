import { FilterOptions } from '../../dtos/clinic-filter-option';
import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class FilterClinicService {
    private readonly clinicRepo;
    constructor(clinicRepo: IClinicRepository);
    filterClinic(filterOptions: FilterOptions): Promise<NearByclinicResponse[]>;
}
