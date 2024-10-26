import { PrismaService } from '../../../prisma/prisma.service';
import { IConfirmationCodeRepository } from '../interfaces/IConfirmationCode';
import { CreateConfirmationCode } from '../../dtos/create-confirmation-code';
import { ConfirmationsCode } from '../../entities/confirmationCode';
export declare class PrismaConfirmationCodeRepository implements IConfirmationCodeRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateConfirmationCode): Promise<ConfirmationsCode>;
    verifyConfirmationCode(userId: string, code: string): Promise<boolean>;
    deleteConfirmationCode(id: string): Promise<void>;
}
