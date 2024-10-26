import { ListAllLuvuluCardService } from '../../usecases/listAll/listaAll-luvulu-card..service';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
export declare class FindAllLuvuluCardResolver {
    private readonly repo;
    constructor(repo: ListAllLuvuluCardService);
    findAllLuvuluCard(user: any): Promise<LuvuluCardResponse[]>;
}
