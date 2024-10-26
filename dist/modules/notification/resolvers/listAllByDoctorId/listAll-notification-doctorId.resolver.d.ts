import { NotificationResponse } from '../../dtos/notificationResponse';
import { ListAllNotificationByDoctorIdService } from '../../usecases/getAllNotificationBydoctorId/getAll-notification-doctorId.service';
export declare class ListAllNotificationDoctorIdResolver {
    private readonly notificationRepo;
    constructor(notificationRepo: ListAllNotificationByDoctorIdService);
    findAllNotificationDoctorID(user: any): Promise<NotificationResponse[]>;
}
