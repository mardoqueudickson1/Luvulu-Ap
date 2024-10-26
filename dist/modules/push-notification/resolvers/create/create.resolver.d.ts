import { CreateFCMService } from '../../usecases/create/create.service';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';
import { fcmTokens } from '../../entities/fcm.entity';
export declare class CreateFMCResolver {
    private readonly repo;
    constructor(repo: CreateFCMService);
    createFCMToken(data: fcmTokenInput, user: any): Promise<fcmTokens>;
}
