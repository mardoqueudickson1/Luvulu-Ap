import { Institution } from '@prisma/client';
export declare class Clinics implements Institution {
    id: string;
    userId: string;
    clinicLatitude: string;
    cliniclongitude: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
