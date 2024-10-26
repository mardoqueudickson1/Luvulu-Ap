import { ConsultationType } from '@prisma/client';
export declare class ConsultationTypes implements ConsultationType {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
