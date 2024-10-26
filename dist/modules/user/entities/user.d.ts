import { RoleType, User } from '@prisma/client';
export declare class Users implements User {
    id: string;
    userId?: string;
    name: string;
    email: string;
    password: string;
    nationality: string | null;
    Role: RoleType;
    phone: string;
    birthday: Date | null;
    gender: string | null;
    BI: string | null;
    neigbhod: string;
    city: string;
    nif: string | null;
    FatherName: string | null;
    MotherName: string | null;
    type: string;
    FCMToken?: string | null;
    avatar: string;
    municipality: string | null;
    addressComplement: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
