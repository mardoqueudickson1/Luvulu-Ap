import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
export declare class ListAllTopRatingService {
    private readonly repo;
    constructor(repo: IRatingRepository);
    findAllTopRated(): Promise<TopResponseAllDoctor[]>;
}
export declare function calculateDoctorRating(doctors: TopResponseAllDoctor[]): TopResponseAllDoctor[];
