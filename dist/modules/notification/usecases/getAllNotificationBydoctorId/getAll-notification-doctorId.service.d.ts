import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
export declare class ListAllNotificationByDoctorIdService {
    private readonly notificationRepo;
    constructor(notificationRepo: INotificationRepository);
    listAll(doctorId: string): Promise<NotificationResponse[]>;
}
