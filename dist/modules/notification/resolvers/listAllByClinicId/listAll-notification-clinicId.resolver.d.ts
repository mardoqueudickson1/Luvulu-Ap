import { NotificationResponse } from '../../dtos/notificationResponse';
import { ListAllNotificationByClinicIdService } from '../../usecases/getAllNotificationByClinicId/getAll-notification-clinicId.service';
export declare class ListAllNotificationClinicIdResolver {
    private readonly notificationRepo;
    constructor(notificationRepo: ListAllNotificationByClinicIdService);
    findAllNotificationClinicId(user: any): Promise<NotificationResponse[]>;
}
