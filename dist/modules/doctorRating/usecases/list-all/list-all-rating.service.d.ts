import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
export declare class ListAllRatingService {
    private readonly repo;
    constructor(repo: IRatingRepository);
    findAll(): Promise<Ratings[]>;
}
