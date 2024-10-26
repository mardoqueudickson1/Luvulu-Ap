import { Doctor, DoctorInstitution } from '@prisma/client';
export declare class Doctors implements Doctor {
    id: string;
    institutionId: string;
    isOnVacation: boolean;
    userId: string;
    registrationNumber: number;
    specialty: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
export declare class DoctorInstitutions implements DoctorInstitution {
    id: string;
    doctorId: string;
    institutionId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
    message?: string;
}
