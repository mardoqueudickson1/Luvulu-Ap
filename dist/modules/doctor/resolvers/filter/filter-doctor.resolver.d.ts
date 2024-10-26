import { FilterDoctorService } from '../../usecases/filter/filter-doctor.service';
import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
export declare class FilterDoctorResolver {
    private readonly repo;
    constructor(repo: FilterDoctorService);
    filterDoctor(data: DoctorFilterOptions): Promise<TopResponseAllDoctor[]>;
}
