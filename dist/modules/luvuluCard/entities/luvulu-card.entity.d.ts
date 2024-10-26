import { CardStatus, PatientCard } from '@prisma/client';
export declare class LuvuluCard implements PatientCard {
    id: string;
    patientId: string;
    clinicId: string;
    qrCode: string;
    cardNumber: string;
    status: CardStatus;
    issuedOn: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
