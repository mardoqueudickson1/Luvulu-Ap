import { Ratings } from '../../entities/rating.entity';
import { FindOneRatingService } from '../../usecases/find-one/find-onde-rating.service';
export declare class FindOneRatingResolver {
    private readonly repo;
    constructor(repo: FindOneRatingService);
    findOneRating(id: string): Promise<Ratings>;
}
