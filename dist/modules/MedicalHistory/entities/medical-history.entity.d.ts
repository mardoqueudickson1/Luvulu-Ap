import { MedicalHistory } from '@prisma/client';
export declare class MedicalHistoryEntity implements MedicalHistory {
    id: string;
    AppointmentId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
