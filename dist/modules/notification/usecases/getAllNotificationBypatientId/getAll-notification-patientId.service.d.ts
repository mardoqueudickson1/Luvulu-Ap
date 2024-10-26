import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
export declare class ListAllNotificationByPatientService {
    private readonly notificationRepo;
    constructor(notificationRepo: INotificationRepository);
    listAll(patientId: string): Promise<NotificationResponse[]>;
}
