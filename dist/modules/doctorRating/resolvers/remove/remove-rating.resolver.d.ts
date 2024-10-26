import { RemoveRatingService } from '../../usecases/remove/remove-rating.service';
export declare class RemoveRatingResolver {
    private readonly repo;
    constructor(repo: RemoveRatingService);
    RemoveRating(id: string): Promise<void>;
}
