import { ClinicRating } from '@prisma/client';
export declare class ClinicRatings implements ClinicRating {
    id: string;
    userId: string;
    clinicId: string;
    rate: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
