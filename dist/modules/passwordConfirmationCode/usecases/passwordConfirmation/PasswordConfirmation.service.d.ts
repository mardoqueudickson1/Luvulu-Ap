import { IConfirmationCodeRepository } from '../../repository/interfaces/IConfirmationCode';
export declare class PasswordConfirmationService {
    private readonly confirmationRepo;
    constructor(confirmationRepo: IConfirmationCodeRepository);
    generateConfirmationCode(user: string): Promise<string>;
    verifyConfirmationCode(userId: string, code: string): Promise<boolean>;
}
