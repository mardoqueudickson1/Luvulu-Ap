import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { FindOneClinicRatingService } from '../../usecases/find-one/find-onde-rating.service';
export declare class FindOneClinicRatingResolver {
    private readonly repo;
    constructor(repo: FindOneClinicRatingService);
    findOneClinicRating(id: string): Promise<ClinicRatings>;
}
