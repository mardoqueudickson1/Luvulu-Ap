import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
export declare class ListAllNotificationByClinicIdService {
    private readonly notificationRepo;
    constructor(notificationRepo: INotificationRepository);
    listAll(clinicId: string): Promise<NotificationResponse[]>;
}
