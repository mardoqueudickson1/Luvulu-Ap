import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IURestUploadRepository } from '../interface/IUploadRepository';
export declare class PrismaUploadRepository implements IURestUploadRepository {
    private prisma;
    constructor(prisma: PrismaService);
    update(id: string, avatar: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        nationality: string;
        Role: import(".prisma/client").$Enums.RoleType;
        nif: string;
        phone: string;
        birthday: Date;
        FatherName: string;
        MotherName: string;
        type: string;
        gender: string;
        BI: string;
        neigbhod: string;
        city: string;
        municipality: string;
        avatar: string;
        addressComplement: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: boolean;
    }>;
}
