import { PrismaService } from '../../../prisma/prisma.service';
import { IQRCodeRepository } from '../interface/IQRCodeRepository';
import { Qrcodes } from '../../entity/qrCode-entity';
import { CreateQrcode, CreateQrcodeInput } from '../../dtos/create-qrCode';
import { UpdateQrCode } from '../../dtos/update-qrCode';
import { UserResponse } from '../../dtos/userResponse';
export declare class PrismaQRCodeRepository implements IQRCodeRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByData(data: CreateQrcodeInput): Promise<any>;
    update(id: string, data: UpdateQrCode): Promise<any>;
    create(data: CreateQrcode): Promise<Qrcodes>;
    findByID(id: string): Promise<UserResponse>;
}
