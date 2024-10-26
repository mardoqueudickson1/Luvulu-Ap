import { RemoveClinicRatingService } from '../../usecases/remove/remove-rating.service';
export declare class RemoveClinicRatingResolver {
    private readonly repo;
    constructor(repo: RemoveClinicRatingService);
    RemoveClinicRating(id: string): Promise<void>;
}
