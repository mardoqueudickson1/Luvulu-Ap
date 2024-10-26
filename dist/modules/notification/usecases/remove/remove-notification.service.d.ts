import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
export declare class RemoveNotificationService {
    private readonly notificationRepo;
    constructor(notificationRepo: INotificationRepository);
    remove(id: string): Promise<void>;
}
