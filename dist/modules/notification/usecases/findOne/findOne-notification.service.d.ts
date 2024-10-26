import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { Notifications } from '../../entities/notification.entity';
export declare class FindOneNotificationService {
    private readonly notificationRepo;
    constructor(notificationRepo: INotificationRepository);
    findOne(id: string): Promise<Notifications>;
}
