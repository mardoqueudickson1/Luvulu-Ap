import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
export declare class ListAllClinicRatingService {
    private readonly repo;
    constructor(repo: IClinicRatingRepository);
    findAll(): Promise<ClinicRatings[]>;
}
