import { TypeNotification } from '@prisma/client';
export declare class CreateNotificationInput {
    content: string;
    appointmentId?: string;
    luvuluCardId?: string;
    read: boolean;
    type?: TypeNotification;
    doctor_id?: string;
    patient_id?: string;
    institution_id?: string;
}
