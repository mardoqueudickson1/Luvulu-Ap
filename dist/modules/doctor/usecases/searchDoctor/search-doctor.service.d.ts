import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
export declare class SearchDoctorService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    searchDoctor(name: string, page: number): Promise<TopResponseAllDoctor[]>;
}
