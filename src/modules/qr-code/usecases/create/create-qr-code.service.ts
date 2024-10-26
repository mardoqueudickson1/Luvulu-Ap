import { Injectable } from '@nestjs/common';
import { CreateQrcodeInput } from '../../dtos/create-qrCode';
import { IQRCodeRepository } from '../../repository/interface/IQRCodeRepository';
import * as qr from 'qrcode';
import { Qrcodes } from '../../entity/qrCode-entity';
import { QrcodeResponse } from '../../dtos/qrCode-rsponse';

@Injectable()
export class CreateQrCodeService {
  constructor(private repo: IQRCodeRepository) {}

  async create(data: QrcodeResponse): Promise<Qrcodes> {
    const user = await this.repo.findByID(data.id);

    const qrData = JSON.stringify({
      id: user.id,
      nome: user.name,
      telefone: user.phone,
      Nome_do_Pai: user.FatherName,
      Nome_da_Mae: user.MotherName,
      genero: user.gender,
      Complemento_de_Endereco: user.addressComplement,
      BI: user.BI,
      numero_do_pacinete: user.paciente_number,
    });

    const qrCodeImage: string = await qr.toDataURL(qrData);

    const qrCodeData: CreateQrcodeInput = {
      patientId: user.pacienteId,
      code: qrCodeImage,
    };

    const existingQrCode = await this.repo.findByData(qrCodeData);

    if (existingQrCode) {
      return this.repo.update(existingQrCode.id, qrCodeData);
    }

    return await this.repo.create(qrCodeData);
  }
}
