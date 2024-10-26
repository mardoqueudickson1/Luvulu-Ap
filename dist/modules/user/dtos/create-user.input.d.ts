import { RoleType } from '@prisma/client';
export declare class CreateUserInput {
    name: string;
    email: string;
    password: string;
    nationality: string | null;
    Role: RoleType;
    phone: string;
    birthday: Date;
    gender?: string | null;
    BI?: string | null;
    neigbhod: string | null;
    city: string;
    nif?: string | null;
    FatherName?: string | null;
    MotherName?: string | null;
    type?: string;
    avatar?: string;
    municipality?: string | null;
    addressComplement?: string | null;
}
