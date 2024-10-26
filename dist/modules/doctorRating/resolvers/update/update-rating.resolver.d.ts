import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { UpdateRatingService } from '../../usecases/update/update-rating.service';
export declare class UpdateRatingResolver {
    private readonly repo;
    constructor(repo: UpdateRatingService);
    UpdateRating(data: updateRating): Promise<Ratings>;
}
