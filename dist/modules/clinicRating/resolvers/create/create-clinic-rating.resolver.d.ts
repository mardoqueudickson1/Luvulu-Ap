import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { CreateClinicRatingService } from '../../usecases/create/create-rating.service';
export declare class CreateClinicRatingResolver {
    private readonly repo;
    constructor(repo: CreateClinicRatingService);
    createClinicRating(input: CreateClinicRatingInput, user: any): Promise<ClinicRatings>;
}
