import { Appointment, AppointmentStatus } from '@prisma/client';
export declare class Appointments implements Appointment {
    id: string;
    patientId: string;
    institutionId: string;
    consultationTypeId: string;
    doctorId: string;
    symptomDescription: string;
    isUrgent: boolean;
    date: Date;
    status: AppointmentStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
