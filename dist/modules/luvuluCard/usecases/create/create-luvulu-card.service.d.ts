import { CreateLuvuluCard } from '../../dtos/create-luvulu-card.input';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { QrcodeResponse } from 'src/modules/qr-code/dtos/qrCode-rsponse';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
export declare class CreateLuvuluCardService {
    private readonly repo;
    private readonly notificationRepo;
    constructor(repo: ILuvuluCardRepository, notificationRepo: INotificationRepository);
    create(data: CreateLuvuluCard, user: QrcodeResponse): Promise<import("../../entities/luvulu-card.entity").LuvuluCard>;
}
