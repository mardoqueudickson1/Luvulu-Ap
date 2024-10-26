import { Qrcode } from '@prisma/client';
export declare class Qrcodes implements Qrcode {
    id: string;
    patientId: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
