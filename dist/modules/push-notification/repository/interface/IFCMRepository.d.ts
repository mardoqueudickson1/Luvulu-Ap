import { fcmTokenInput, fcmTokenUpdate } from '../../dtos/fcmtoken.input';
import { fcmTokens } from '../../entities/fcm.entity';
export declare abstract class IFCMRepository {
    abstract create(data: fcmTokenInput): Promise<fcmTokens>;
    abstract remove(id: string): Promise<void>;
    abstract findById(id: string): Promise<any>;
    abstract update(data: fcmTokenUpdate): Promise<fcmTokens>;
}
