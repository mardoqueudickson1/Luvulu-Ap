import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
export declare class FindOneRatingService {
    private readonly repo;
    constructor(repo: IRatingRepository);
    findOne(id: string): Promise<Ratings>;
}
