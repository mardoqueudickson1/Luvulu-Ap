import { CardStatus } from '@prisma/client';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { CancelLuvuluCardRequestService } from '../../usecases/cancelRequest/change-status-luvulu-card.service';
export declare class AcceptLuvuluCardRequestResolver {
    private readonly repo;
    constructor(repo: CancelLuvuluCardRequestService);
    acceptLuvuluCardRequest(status: CardStatus, id: string): Promise<LuvuluCard>;
}
