import { Users } from 'src/modules/user/entities/user';
export declare class userNotifications {
    id: string;
    name: string;
    email: string;
    nationality: string | null;
    nif: string | null;
    FatherName: string | null;
    MotherName: string | null;
    avatar: string;
    municipality: string | null;
    city: string | null;
    neigbhod: string | null;
}
export declare class userPatientNotifications {
    number: number;
    patient: Users;
}
export declare class userDoctorNotifications {
    isOnVacation: boolean;
    registrationNumber: number;
    specialty: string;
    bio: string;
    doctors: Users;
}
export declare class userInstitutionNotifications {
    institutions: Users;
}
export declare class NotificationResponse {
    id: string;
    name: string;
    avatar?: string | null;
    content: string;
    read: boolean;
    doctor_id?: string | null;
    patient_id?: string | null;
    institution_id?: string;
    appointmentId?: string | null;
    type?: string | null;
    luvuliCardId?: string | null;
    createdAt: Date;
}
