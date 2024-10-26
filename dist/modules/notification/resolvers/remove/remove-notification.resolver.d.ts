import { RemoveNotificationService } from '../../usecases/remove/remove-notification.service';
export declare class RemoveNotificationResolver {
    private readonly notificationRepo;
    constructor(notificationRepo: RemoveNotificationService);
    removeNotification(id: string): Promise<void>;
}
