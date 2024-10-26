import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
export declare class RemoveClinicRatingService {
    private readonly repo;
    constructor(repo: IClinicRatingRepository);
    remove(id: string): Promise<void>;
}
