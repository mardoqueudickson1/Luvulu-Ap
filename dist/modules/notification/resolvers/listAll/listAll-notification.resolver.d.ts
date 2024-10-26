import { ListAllNotificationService } from '../../usecases/listAll/listaAll-notification.service';
import { NotificationResponse } from '../../dtos/notificationResponse';
export declare class ListAllNotificationResolver {
    private readonly notificationRepo;
    constructor(notificationRepo: ListAllNotificationService);
    findAllNotification(): Promise<NotificationResponse[]>;
}
