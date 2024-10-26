import { CreateRatingInput } from '../../dtos/create-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { CreateRatingService } from '../../usecases/create/create-rating.service';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
export declare class CreateRatingResolver {
    private readonly repo;
    constructor(repo: CreateRatingService);
    createRating(input: CreateRatingInput, user: UserProfileResponse): Promise<Ratings>;
}
