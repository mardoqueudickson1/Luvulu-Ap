import { CreateRatingInput } from '../../dtos/create-rating.input';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
import { Ratings } from '../../entities/rating.entity';
export declare class CreateRatingService {
    private repo;
    constructor(repo: IRatingRepository);
    create(data: CreateRatingInput): Promise<Ratings>;
}
