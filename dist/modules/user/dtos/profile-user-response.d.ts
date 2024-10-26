import { RoleType } from '@prisma/client';
export declare class UserProfileResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    birthday?: Date | null;
    nationality: string;
    Role: RoleType;
    phone: string;
    FatherName: string;
    MotherName: string;
    neigbhod: string;
    gender: string;
    city: string;
    nif: string;
    municipality: string;
    avatar?: string;
    addressComplement: string;
}
