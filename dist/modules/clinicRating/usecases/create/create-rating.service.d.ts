import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
export declare class CreateClinicRatingService {
    private repo;
    constructor(repo: IClinicRatingRepository);
    create(data: CreateClinicRatingInput): Promise<ClinicRatings>;
}
