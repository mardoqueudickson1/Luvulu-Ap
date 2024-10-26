import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { UpdateLuvuluCard } from '../../dtos/update-luvulu-card';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
export declare class ChangeStatusLuvuluCardService {
    private readonly repo;
    private readonly notificationRepo;
    constructor(repo: ILuvuluCardRepository, notificationRepo: INotificationRepository);
    changeStatus(data: UpdateLuvuluCard): Promise<UpdateLuvuluCard>;
}
