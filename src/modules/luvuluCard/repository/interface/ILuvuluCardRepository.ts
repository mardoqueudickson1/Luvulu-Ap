import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { UpdateLuvuluCard } from '../../dtos/update-luvulu-card';
import { CreateLuvuluCard } from '../../dtos/create-luvulu-card.input';
import { CreateQrcodeInput } from 'src/modules/qr-code/dtos/create-qrCode';
import { Qrcodes } from 'src/modules/qr-code/entity/qrCode-entity';
import { UpdateQrCode } from 'src/modules/qr-code/dtos/update-qrCode';
import { UserResponse } from 'src/modules/qr-code/dtos/userResponse';
import { CardStatus } from '@prisma/client';

export abstract class ILuvuluCardRepository {
  abstract create(data: CreateLuvuluCard): Promise<LuvuluCard>;
  abstract findUser(id: string): Promise<any>;
  abstract update(data: UpdateLuvuluCard): Promise<UpdateLuvuluCard>;
  abstract findAll(id: string): Promise<LuvuluCardResponse[]>;
  abstract findAOne(id: string): Promise<LuvuluCardResponse>;
  abstract createQrCode(data: CreateQrcodeInput): Promise<Qrcodes>;
  abstract findByData(id: string): Promise<any>;
  abstract updateQrCode(id: string, data: UpdateQrCode): Promise<any>;
  abstract findByID(id: string): Promise<UserResponse>;
  abstract changeStatus(status: CardStatus, id: string): Promise<LuvuluCard>;
  abstract findByPaceintId(id: string): Promise<LuvuluCardResponse>;
}
