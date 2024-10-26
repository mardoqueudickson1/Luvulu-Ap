import { Speciality } from '@prisma/client';
export declare class Specialities implements Speciality {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
