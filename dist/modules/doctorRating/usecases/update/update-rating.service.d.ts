import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
export declare class UpdateRatingService {
    private readonly repo;
    constructor(repo: IRatingRepository);
    update(id: string, data: updateRating): Promise<Ratings>;
}
