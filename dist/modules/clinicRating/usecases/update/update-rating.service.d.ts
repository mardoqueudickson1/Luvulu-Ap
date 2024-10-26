import { updateClinicRating } from '../../dtos/update-ClinicRating';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
export declare class UpdateClinicRatingService {
    private readonly repo;
    constructor(repo: IClinicRatingRepository);
    update(id: string, data: updateClinicRating): Promise<ClinicRatings>;
}
