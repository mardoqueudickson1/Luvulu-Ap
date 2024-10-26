import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { UpdateClinicRatingService } from '../../usecases/update/update-rating.service';
import { updateClinicRating } from '../../dtos/update-ClinicRating';
export declare class UpdateClinicRatingResolver {
    private readonly repo;
    constructor(repo: UpdateClinicRatingService);
    UpdateClinicRating(data: updateClinicRating): Promise<ClinicRatings>;
}
