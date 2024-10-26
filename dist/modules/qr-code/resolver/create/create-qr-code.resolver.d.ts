import { Qrcodes } from '../../entity/qrCode-entity';
import { CreateQrCodeService } from '../../usecases/create/create-qr-code.service';
import { QrcodeResponse } from '../../dtos/qrCode-rsponse';
export declare class CreateQrCodeResolver {
    private readonly repo;
    constructor(repo: CreateQrCodeService);
    CreateQrCode(user: QrcodeResponse): Promise<Qrcodes>;
}
