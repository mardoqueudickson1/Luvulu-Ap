import { FindOneClinicRatedService } from '../../usecases/find-one-rated/find-one-rated.service';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
export declare class FindOneClinicRatedResolver {
    private readonly repo;
    constructor(repo: FindOneClinicRatedService);
    findOneRatedClinic(id: string): Promise<TopResponseAllClinic>;
}
