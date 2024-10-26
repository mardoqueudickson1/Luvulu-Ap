import { CardStatus } from '@prisma/client';
export declare class CreateLuvuluCard {
    patientId?: string;
    clinicId: string;
    qrCode?: string;
    cardNumber?: string;
    status?: CardStatus;
    issuedOn?: Date;
}
export declare class CreateLuvuluCardInput {
    id?: string;
    patientId: string;
    qrCode: string;
    clinicId: string;
    cardNumber: string;
    status: CardStatus;
    issuedOn: Date;
}
