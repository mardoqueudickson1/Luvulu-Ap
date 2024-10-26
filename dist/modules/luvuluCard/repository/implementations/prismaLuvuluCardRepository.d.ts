import { PrismaService } from 'nestjs-prisma';
import { ILuvuluCardRepository } from '../interface/ILuvuluCardRepository';
import { CreateLuvuluCardInput } from '../../dtos/create-luvulu-card.input';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { UpdateLuvuluCard } from '../../dtos/update-luvulu-card';
import { CreateQrcode } from 'src/modules/qr-code/dtos/create-qrCode';
import { Qrcodes } from 'src/modules/qr-code/entity/qrCode-entity';
import { UpdateQrCode } from 'src/modules/qr-code/dtos/update-qrCode';
import { UserResponse } from 'src/modules/qr-code/dtos/userResponse';
import { CardStatus } from '@prisma/client';
export declare class PrismaLuvulucardRepositoy implements ILuvuluCardRepository {
    private prisma;
    constructor(prisma: PrismaService);
    update(data: UpdateLuvuluCard): Promise<UpdateLuvuluCard>;
    updateQrCode(id: string, data: UpdateQrCode): Promise<any>;
    create(data: CreateLuvuluCardInput): Promise<LuvuluCard>;
    findByData(id: string): Promise<any>;
    findByPaceintId(id: string): Promise<LuvuluCardResponse>;
    createQrCode(data: CreateQrcode): Promise<Qrcodes>;
    findAll(id: string): Promise<LuvuluCardResponse[]>;
    findUser(id: string): Promise<any>;
    findAOne(id: string): Promise<LuvuluCardResponse>;
    findByID(id: string): Promise<UserResponse>;
    changeStatus(status: CardStatus, id: string): Promise<LuvuluCard>;
}
