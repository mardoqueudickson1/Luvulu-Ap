import { IFCMRepository } from '../../repository/interface/IFCMRepository';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';
export declare class RemoveFCMService {
    private repo;
    constructor(repo: IFCMRepository);
    create(data: fcmTokenInput): Promise<import("../../entities/fcm.entity").fcmTokens>;
}
