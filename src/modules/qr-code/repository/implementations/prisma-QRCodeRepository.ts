import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { IQRCodeRepository } from '../interface/IQRCodeRepository';
import { Qrcodes } from '../../entity/qrCode-entity';
import { CreateQrcode, CreateQrcodeInput } from '../../dtos/create-qrCode';
import { UpdateQrCode } from '../../dtos/update-qrCode';
import { UserResponse } from '../../dtos/userResponse';

@Injectable()
export class PrismaQRCodeRepository implements IQRCodeRepository {
  constructor(private prisma: PrismaService) {}

  async findByData(data: CreateQrcodeInput): Promise<any> {
    const existingQrCode = await this.prisma.qrcode.findFirst({
      where: { code: data.code },
    });

    return existingQrCode;
  }

  async update(id: string, data: UpdateQrCode): Promise<any> {
    return await this.prisma.qrcode.update({
      where: { id: id },
      data: data,
    });
  }

  async create(data: CreateQrcode): Promise<Qrcodes> {
    return await this.prisma.qrcode.create({ data });
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
}
