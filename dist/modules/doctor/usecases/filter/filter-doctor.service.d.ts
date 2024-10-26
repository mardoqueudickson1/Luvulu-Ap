import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
export declare class FilterDoctorService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    filterDoctor(data: DoctorFilterOptions): Promise<TopResponseAllDoctor[]>;
}
