import { AppointmentStatus } from '@prisma/client';
export declare class UsersResponse {
    id?: string;
    name: string;
    email: string;
    neigbhod: string | null;
    city: string;
    municipality?: string | null;
    addressComplement?: string | null;
    phone?: string;
    birthday?: Date;
    avatar?: string;
    gender?: string | null;
    FatherName?: string | null;
    MotherName?: string | null;
}
export declare class DoctorsReponses {
    id: string;
    isOnVacation: boolean;
    doctorToken?: string;
    specialty: string;
    bio: string;
    user: UsersResponse;
}
export declare class InstitutionsReponse {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    user: UsersResponse;
}
export declare class ResponseAllAppointPatient {
    id: string;
    pacient: UsersResponse;
    consultationType: string;
    doctorId?: string;
    institutionId?: string;
    description?: string;
    isUrgent: boolean;
    isReported?: boolean;
    isRated?: boolean;
    date: Date;
    patientId?: string;
    doctor: DoctorsReponses;
    institution: InstitutionsReponse;
    medicalReportId?: string[];
    status: AppointmentStatus;
    symptomDescription: string;
    createdAt: Date;
    updatedAt: Date;
}
