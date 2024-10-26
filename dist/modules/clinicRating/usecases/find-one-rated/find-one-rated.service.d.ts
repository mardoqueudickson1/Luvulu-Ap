import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
export declare class FindOneClinicRatedService {
    private readonly repo;
    constructor(repo: IClinicRatingRepository);
    findOne(id: string): Promise<TopResponseAllClinic>;
}
export declare function calculateOneRatedClinic(clinic: TopResponseAllClinic): TopResponseAllClinic;
