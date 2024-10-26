import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
export declare class RemoveRatingService {
    private readonly repo;
    constructor(repo: IRatingRepository);
    remove(id: string): Promise<void>;
}
