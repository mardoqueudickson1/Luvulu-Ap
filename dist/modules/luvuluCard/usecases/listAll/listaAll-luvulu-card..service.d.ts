import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
export declare class ListAllLuvuluCardService {
    private readonly repo;
    constructor(repo: ILuvuluCardRepository);
    listAll(id: string): Promise<LuvuluCardResponse[]>;
}
