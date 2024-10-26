import { Rating } from '@prisma/client';
export declare class Ratings implements Rating {
    id: string;
    userId: string;
    doctorId: string;
    appoitmentID: string | null;
    rate: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
