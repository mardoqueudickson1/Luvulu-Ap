import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import { Notifications } from '../../entities/notification.entity';
export declare class UpdateNotificationService {
    private readonly repo;
    constructor(repo: INotificationRepository);
    update(id: string, data: UpdateNotificationInput): Promise<Notifications>;
}
