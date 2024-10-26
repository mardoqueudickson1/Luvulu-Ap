import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
import { messages } from 'src/utils/shared/errorsMessages';
import { CardStatus } from '@prisma/client';

@Injectable()
export class PrismaLuvulucardRepositoy implements ILuvuluCardRepository {
  constructor(private prisma: PrismaService) {}

  async update(data: UpdateLuvuluCard): Promise<UpdateLuvuluCard> {
    return this.prisma.patientCard.update({
      where: { id: data.id, clinicId: data.clinicId },
      data: { status: data.status },
    });
  }

  async updateQrCode(id: string, data: UpdateQrCode): Promise<any> {
    return await this.prisma.qrcode.update({
      where: { id: id },
      data: data,
    });
  }

  async create(data: CreateLuvuluCardInput): Promise<LuvuluCard> {
    try {
      return await this.prisma.patientCard.create({ data });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Erro ao fazer pedidodo do cartão',
      );
    }
  }
  async findByData(id: string): Promise<any> {
    return await this.prisma.patientCard.findFirst({
      where: { patientId: id },
    });
  }

  async findByPaceintId(id: string): Promise<LuvuluCardResponse> {
    const existingQrCode = await this.prisma.patientCard.findFirst({
      where: { patientId: id },
      select: {
        id: true,
        cardNumber: true,
        status: true,
        patient: {
          select: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    const result: LuvuluCardResponse = {
      id: existingQrCode.id,
      cardNumber: existingQrCode.cardNumber,
      status: existingQrCode.status,
      name: existingQrCode.patient.user.name,
    };
    return result;
  }

  async createQrCode(data: CreateQrcode): Promise<Qrcodes> {
    return await this.prisma.qrcode.create({ data });
  }

  async findAll(id: string): Promise<LuvuluCardResponse[]> {
    try {
      const data = await this.prisma.patientCard.findMany({
        where: { clinicId: id },
        include: {
          patient: {
            select: {
              user: true,
            },
          },
        },
      });

      const result: LuvuluCardResponse[] = data.map((e) => ({
        id: e.id,
        pacientId: e.patientId,
        name: e.patient.user.name,
        cardNumber: e.cardNumber,
        status: e.status,
        qrCode: e.qrCode,
      }));
      return result;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar cartoes luvulu');
    }
  }

  async findUser(id: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        Doctor: {
          select: {
            id: true,
          },
        },
        Patient: {
          select: {
            id: true,
            number: true,
          },
        },
        Institution: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(messages.userNotfound);
    }

    const result: any = {
      Institution: user.Institution[0],
      pacient: user.Patient[0],
    };
    return result;
  }

  async findAOne(id: string): Promise<LuvuluCardResponse> {
    const data = await this.prisma.patientCard.findUnique({
      where: { id: id },
      include: {
        patient: {
          select: {
            user: true,
          },
        },
      },
    });

    const result: LuvuluCardResponse = {
      id: data.id,
      pacientId: data.patientId,
      name: data.patient.user.name,
      cardNumber: data.cardNumber,
      status: data.status,
      qrCode: data.qrCode,
    };
    return result;
  }

  async findByID(id: string): Promise<UserResponse> {
    const data = await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        Patient: {
          select: {
            id: true,
            number: true,
          },
        },
      },
    });

    const result: UserResponse = {
      id: data.id,
      name: data.name,
      email: data.email,
      BI: data.BI,
      nationality: data.nationality,
      phone: data.phone,
      birthday: data.birthday,
      gender: data.gender,
      neigbhod: data.neigbhod,
      city: data.city,
      nif: data.nif,
      FatherName: data.FatherName,
      MotherName: data.MotherName,
      municipality: data.municipality,
      addressComplement: data.addressComplement,
      paciente_number: data.Patient[0].number,
      pacienteId: data.Patient[0].id,
    };

    return result;
  }

  async changeStatus(status: CardStatus, id: string): Promise<LuvuluCard> {
    return await this.prisma.patientCard.update({
      where: { id: id },
      data: { status: status },
    });
  }
}
