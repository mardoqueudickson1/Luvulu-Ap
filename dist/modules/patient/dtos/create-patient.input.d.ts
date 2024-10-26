import { RoleType } from '@prisma/client';
export declare class CreatePatientInput {
    name: string;
    email: string;
    password: string;
    birthday?: Date;
    nationality: string | null;
    Role: RoleType;
    phone: string;
    FatherName: string | null;
    MotherName: string | null;
    BI?: string | null;
    avatar?: string;
    neigbhod: string | null;
    gender: string | null;
    city: string;
    nif: string | null;
    municipality?: string | null;
    addressComplement?: string | null;
}
export declare class CreatePatientPartial {
    userId: string;
    number: number;
}
