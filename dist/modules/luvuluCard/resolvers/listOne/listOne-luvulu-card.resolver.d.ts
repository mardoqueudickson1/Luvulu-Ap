import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { ListOneLuvuluCardService } from '../../usecases/listOne/lista-one-luvulu-card.service';
export declare class FindOneLuvuluCardResolver {
    private readonly repo;
    constructor(repo: ListOneLuvuluCardService);
    findOneLuvuluCard(id: string): Promise<LuvuluCardResponse>;
}
