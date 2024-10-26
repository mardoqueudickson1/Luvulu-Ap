import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
export declare class FindOneRatedService {
    private readonly repo;
    constructor(repo: IRatingRepository);
    findOne(id: string): Promise<TopResponseAllDoctor>;
}
export declare function calculateOneDoctorRatings(doctor: TopResponseAllDoctor): TopResponseAllDoctor;
