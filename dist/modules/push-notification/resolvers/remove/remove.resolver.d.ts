import { fcmTokenInput } from '../../dtos/fcmtoken.input';
import { CreateFCMService } from '../../usecases/create/create.service';
import { fcmTokens } from '../../entities/fcm.entity';
export declare class CreateFMCResolver {
    private readonly repo;
    constructor(repo: CreateFCMService);
    removeFCMToken(data: fcmTokenInput, user: any): Promise<fcmTokens>;
}
