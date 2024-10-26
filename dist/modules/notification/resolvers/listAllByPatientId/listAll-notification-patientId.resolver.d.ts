import { NotificationResponse } from '../../dtos/notificationResponse';
import { ListAllNotificationByPatientService } from '../../usecases/getAllNotificationBypatientId/getAll-notification-patientId.service';
export declare class ListAllNotificationPatientResolver {
    private readonly notificationRepo;
    constructor(notificationRepo: ListAllNotificationByPatientService);
    findAllNotificationPatientId(user: any): Promise<NotificationResponse[]>;
}
