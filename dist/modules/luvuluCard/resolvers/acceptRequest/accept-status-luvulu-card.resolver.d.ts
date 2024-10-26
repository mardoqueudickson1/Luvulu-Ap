import { ChangeStatusLuvuluCardService } from '../../usecases/changestatus/change-status-luvulu-card.service';
import { UpdateLuvuluCard } from '../../dtos/update-luvulu-card';
export declare class CancelLuvuluCardRequestResolver {
    private readonly repo;
    constructor(repo: ChangeStatusLuvuluCardService);
    CancelLuvuluCardRequest(data: UpdateLuvuluCard): Promise<UpdateLuvuluCard>;
}
