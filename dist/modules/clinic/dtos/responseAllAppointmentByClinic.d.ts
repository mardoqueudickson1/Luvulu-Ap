import { AppointmentStatus } from '@prisma/client';
export declare class UserClinicResponse {
    id: string;
    name: string;
}
export declare class PatientReponsesClinic {
    id: string;
    number: number;
    createdAt: Date;
    updatedAt: Date;
    user: UserClinicResponse;
}
export declare class ConsultationTypeResponseClinic {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class DoctorsClinicResponse {
    id: string;
    isOnVacation: boolean;
    specialty: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
    user: UserClinicResponse;
}
export declare class ResponseAllAppointClinic {
    id: string;
    isUrgent: boolean;
    date: Date;
    doctor: DoctorsClinicResponse;
    patient: PatientReponsesClinic;
    consultationType: ConsultationTypeResponseClinic;
    status: AppointmentStatus;
    symptomDescription: string;
    createdAt: Date;
    updatedAt: Date;
}
