import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
export declare class ListAllTopClinicRatingService {
    private readonly repo;
    constructor(repo: IClinicRatingRepository);
    findAllTopRated(): Promise<TopResponseAllClinic[]>;
}
export declare function calculateClinicRatings(clinics: TopResponseAllClinic[]): TopResponseAllClinic[];
