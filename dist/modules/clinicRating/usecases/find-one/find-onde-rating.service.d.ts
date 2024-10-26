import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
export declare class FindOneClinicRatingService {
    private readonly repo;
    constructor(repo: IClinicRatingRepository);
    findOne(id: string): Promise<ClinicRatings>;
}
