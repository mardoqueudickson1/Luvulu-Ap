import { ListAllTopClinicRatingService } from '../../usecases/list-all -top-rated/list-all-top-rated.service';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
export declare class FindAllTopClinicRatedResolver {
    private readonly repo;
    constructor(repo: ListAllTopClinicRatingService);
    findAllTopClinicRated(): Promise<TopResponseAllClinic[]>;
}
