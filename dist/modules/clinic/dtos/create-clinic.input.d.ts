import { RoleType } from '@prisma/client';
export declare class CreateClinicInput {
    name: string;
    email: string;
    password: string;
    birthday: Date;
    nationality: string | null;
    Role: RoleType;
    phone: string;
    FatherName: string | null;
    MotherName: string | null;
    BI?: string | null;
    neigbhod: string | null;
    gender: string | null;
    avatar?: string;
    city: string;
    type: string;
    nif: string | null;
    municipality?: string | null;
    addressComplement?: string | null;
    clinicLatitude: number;
    cliniclongitude: number;
}
export declare class CreateClinicPartial {
    userId: string;
    clinicLatitude: string;
    cliniclongitude: string;
    type?: string;
}
