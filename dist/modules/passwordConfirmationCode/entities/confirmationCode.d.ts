import { PasswordConfirmationCode } from '@prisma/client';
export declare class ConfirmationsCode implements PasswordConfirmationCode {
    id: string;
    userId: string;
    code: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
