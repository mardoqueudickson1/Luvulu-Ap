import { Favorites } from '@prisma/client';
export declare class Favorite implements Favorites {
    id: string;
    pacientId: string;
    doctorId: string | null;
    institutionId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
    message?: string;
}
