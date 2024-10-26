import { PrismaService } from '../../../prisma/prisma.service';
import { IFCMRepository } from '../interface/IFCMRepository';
import { fcmToken, fcmTokenUpdate } from '../../dtos/fcmtoken.input';
import { fcmTokens } from '../../entities/fcm.entity';
export declare class PrismaFCMRepository implements IFCMRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: fcmToken): Promise<fcmTokens>;
    findById(id: string): Promise<any>;
    remove(id: string): Promise<void>;
    update(data: fcmTokenUpdate): Promise<fcmTokens>;
}
