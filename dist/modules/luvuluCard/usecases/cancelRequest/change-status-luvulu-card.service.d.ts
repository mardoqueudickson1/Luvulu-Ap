import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { CardStatus } from '.prisma/client';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
export declare class CancelLuvuluCardRequestService {
    private readonly repo;
    private readonly notificationRepo;
    constructor(repo: ILuvuluCardRepository, notificationRepo: INotificationRepository);
    changeStatus(status: CardStatus, id: string): Promise<LuvuluCard>;
}
