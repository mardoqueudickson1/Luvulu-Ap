import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { ListAllClinicRatingService } from '../../usecases/list-all/list-all-rating.service';
export declare class FindAllClinicRatingResolver {
    private readonly repo;
    constructor(repo: ListAllClinicRatingService);
    findAllClinicRating(): Promise<ClinicRatings[]>;
}
