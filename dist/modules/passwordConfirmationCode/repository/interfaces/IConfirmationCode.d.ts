import { CreateConfirmationCode } from '../../dtos/create-confirmation-code';
import { ConfirmationsCode } from '../../entities/confirmationCode';
export declare abstract class IConfirmationCodeRepository {
    abstract create(data: CreateConfirmationCode): Promise<ConfirmationsCode>;
    abstract verifyConfirmationCode(userId: string, code: string): Promise<boolean>;
    abstract deleteConfirmationCode(id: string): Promise<void>;
}
