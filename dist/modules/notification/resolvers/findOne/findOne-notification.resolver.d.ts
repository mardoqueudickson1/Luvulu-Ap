import { Notifications } from '../../entities/notification.entity';
import { FindOneNotificationService } from '../../usecases/findOne/findOne-notification.service';
export declare class FindOneNotificationResolver {
    private readonly notificationRepo;
    constructor(notificationRepo: FindOneNotificationService);
    findOneNotification(id: string): Promise<Notifications>;
}
