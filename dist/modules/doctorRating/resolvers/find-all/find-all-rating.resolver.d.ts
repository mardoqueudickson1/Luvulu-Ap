import { Ratings } from '../../entities/rating.entity';
import { ListAllRatingService } from '../../usecases/list-all/list-all-rating.service';
export declare class FindAllRatingResolver {
    private readonly repo;
    constructor(repo: ListAllRatingService);
    findAllRating(): Promise<Ratings[]>;
}
