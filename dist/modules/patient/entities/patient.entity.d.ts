import { Patient } from '@prisma/client';
export declare class Patients implements Patient {
    id: string;
    number: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
