import { IQRCodeRepository } from '../../repository/interface/IQRCodeRepository';
import { Qrcodes } from '../../entity/qrCode-entity';
import { QrcodeResponse } from '../../dtos/qrCode-rsponse';
export declare class CreateQrCodeService {
    private repo;
    constructor(repo: IQRCodeRepository);
    create(data: QrcodeResponse): Promise<Qrcodes>;
}
