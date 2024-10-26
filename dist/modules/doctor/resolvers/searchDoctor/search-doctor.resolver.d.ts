import { SearchDoctorService } from '../../usecases/searchDoctor/search-doctor.service';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
export declare class SearchDoctorResolver {
    private readonly repo;
    constructor(repo: SearchDoctorService);
    SearchDoctor(name: string, page: number): Promise<TopResponseAllDoctor[]>;
}
