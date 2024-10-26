import { BadRequestException, Injectable } from '@nestjs/common';
import * as qr from 'qrcode';

import { CreateLuvuluCard } from '../../dtos/create-luvulu-card.input';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { generateUniquePacientCardNumber } from 'src/utils/utils';
import { QrcodeResponse } from 'src/modules/qr-code/dtos/qrCode-rsponse';
import { CardStatus } from '@prisma/client';
import { messages } from 'src/utils/shared/errorsMessages';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';

@Injectable()
export class CreateLuvuluCardService {
  constructor(
    private readonly repo: ILuvuluCardRepository,
    private readonly notificationRepo: INotificationRepository,
  ) {}

  async create(data: CreateLuvuluCard, user: QrcodeResponse) {
    const { pacient } = await this.repo.findUser(data.patientId);
    const alreadyExist = await this.repo.findByData(pacient.id);

    if (alreadyExist) {
      throw new BadRequestException(messages.RequestAlreadyExist);
    }

    try {
      const qrData = JSON.stringify({
        id: user.id,
        nome: user.name,
        telefone: user.phone,
        Nome_do_Pai: user.FatherName,
        Nome_da_Mae: user.MotherName,
        genero: user.gender,
        Complemento_de_Endereco: user.addressComplement,
        BI: user.BI,
        Numero_do_Paciente: pacient.number,
      });

      const qrCodeImage: string = await qr.toDataURL(qrData);
      const cardNumber = generateUniquePacientCardNumber();

      data.cardNumber = cardNumber.toString();

      data.patientId = pacient.id;
      data.qrCode = qrCodeImage;
      data.status = CardStatus.PENDING;
      data.clinicId = process.env.ClinicCardLuvuluId;

      const card = await this.repo.create(data);

      await this.notificationRepo.create({
        institution_id: card.clinicId,
        content: `Olá! Novo pedido de acartão do paciente ${user.name}.`,
        read: false,
      });

      return card;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
