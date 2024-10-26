import { RoleType } from '@prisma/client';
export declare class CreateDoctorInput {
    name: string;
    email: string;
    password: string;
    birthday: Date;
    nationality: string | null;
    Role: RoleType;
    phone: string;
    FatherName: string | null;
    MotherName: string | null;
    neigbhod: string | null;
    gender: string | null;
    avatar?: string;
    city: string;
    nif: string;
    municipality?: string | null;
    addressComplement?: string | null;
}
export declare class CreateDoctorPartial {
    id?: string;
    userId?: string;
    institutionId?: string;
    specialty: string;
    isOnVacation?: boolean;
    registrationNumber?: number;
    bio: string;
}
