import { CardStatus } from '@prisma/client';
export declare class UserCardInfo {
    name: string;
}
export declare class CreateLuvuluCardResponse {
    patient: string;
    qrCode?: string;
    cardNumber: string;
}
export declare class LuvuluCardResponse {
    id: string;
    pacientId?: string;
    name?: string;
    token?: string;
    qrCode?: string;
    cardNumber?: string;
    status: CardStatus;
}
