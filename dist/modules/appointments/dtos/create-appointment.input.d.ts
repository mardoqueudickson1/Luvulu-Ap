import { AppointmentStatus } from '@prisma/client';
export declare class CreateAppointInput {
    patientId: string;
    institutionId: string;
    consultationTypeId: string;
    doctorId: string;
    symptomDescription: string;
    isUrgent: boolean;
    date: Date;
    status: AppointmentStatus;
}
