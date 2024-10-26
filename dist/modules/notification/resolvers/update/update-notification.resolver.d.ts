import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import { UpdateNotificationService } from '../../usecases/update/update-notification.service';
import { Notifications } from '../../entities/notification.entity';
export declare class UpdateNotificationResolver {
    private readonly notificationService;
    constructor(notificationService: UpdateNotificationService);
    updateNotification(notification: UpdateNotificationInput): Promise<Notifications>;
}
