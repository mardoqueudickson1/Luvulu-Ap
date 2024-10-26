import { FindOneRatedService } from '../../usecases/find-one-rated/find-one-rated.service';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
export declare class FindOneRatedResolver {
    private readonly repo;
    constructor(repo: FindOneRatedService);
    findOneRatedDoctor(id: string): Promise<TopResponseAllDoctor>;
}
