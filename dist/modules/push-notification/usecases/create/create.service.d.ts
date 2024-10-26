import { IFCMRepository } from '../../repository/interface/IFCMRepository';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';
import { IUserRepository } from 'src/modules/user/repository/interface/IUserRepository';
export declare class CreateFCMService {
    private repo;
    private userRepo;
    constructor(repo: IFCMRepository, userRepo: IUserRepository);
    create(data: fcmTokenInput): Promise<import("../../entities/fcm.entity").fcmTokens>;
}
