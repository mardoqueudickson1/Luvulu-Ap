import { CreateLuvuluCard } from '../../dtos/create-luvulu-card.input';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { CreateLuvuluCardService } from '../../usecases/create/create-luvulu-card.service';
export declare class CreateLuvuluCardResolver {
    private readonly repo;
    constructor(repo: CreateLuvuluCardService);
    createLuvuluCard(data: CreateLuvuluCard, user: any): Promise<LuvuluCard>;
}
