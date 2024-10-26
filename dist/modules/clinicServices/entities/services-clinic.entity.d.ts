import { Services } from '@prisma/client';
export declare class ServicesClinics implements Services {
    id: string;
    name: string;
    description: string;
    price: number;
    institutionId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
