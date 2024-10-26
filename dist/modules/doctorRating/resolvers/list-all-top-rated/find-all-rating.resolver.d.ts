import { ListAllTopRatingService } from '../../usecases/list-all -top-rated/list-all-top-rated.service';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
export declare class FindAllTopRatedngResolver {
    private readonly repo;
    constructor(repo: ListAllTopRatingService);
    findAllTopRated(): Promise<TopResponseAllDoctor[]>;
}
