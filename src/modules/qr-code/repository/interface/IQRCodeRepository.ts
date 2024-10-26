import { CreateQrcodeInput } from '../../dtos/create-qrCode';
import { UpdateQrCode } from '../../dtos/update-qrCode';
import { UserResponse } from '../../dtos/userResponse';
import { Qrcodes } from '../../entity/qrCode-entity';

export abstract class IQRCodeRepository {
  abstract create(data: CreateQrcodeInput): Promise<Qrcodes>;
  abstract update(id: string, data: UpdateQrCode): Promise<Qrcodes>;
  abstract findByID(id: string): Promise<UserResponse>;
  abstract findByData(data: CreateQrcodeInput): Promise<Qrcodes>;
}
