import { Notification, TypeNotification } from '@prisma/client';
export declare class Notifications implements Notification {
    id: string;
    content: string;
    read: boolean;
    type: TypeNotification;
    doctor_id: string;
    patient_id: string;
    institution_id: string;
    appointmentId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
