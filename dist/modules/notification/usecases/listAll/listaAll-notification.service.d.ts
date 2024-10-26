import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
export declare class ListAllNotificationService {
    private readonly notificationRepo;
    constructor(notificationRepo: INotificationRepository);
    listAll(): Promise<NotificationResponse[]>;
}
