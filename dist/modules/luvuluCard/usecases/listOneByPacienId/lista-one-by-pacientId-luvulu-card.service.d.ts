import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
export declare class ListOneLuvuluCardService {
    private readonly repo;
    constructor(repo: ILuvuluCardRepository);
    listOneByPacientId(id: string): Promise<LuvuluCardResponse>;
}
