import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { IFCMRepository } from '../interface/IFCMRepository';
import { fcmToken, fcmTokenUpdate } from '../../dtos/fcmtoken.input';
import { fcmTokens } from '../../entities/fcm.entity';

@Injectable()
export class PrismaFCMRepository implements IFCMRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: fcmToken): Promise<fcmTokens> {
    return await this.prisma.fCMToken.create({ data });
  }
  async findById(id: string): Promise<any> {
    const data = await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        FCMToken: {
          select: {
            id: true,
            token: true,
          },
        },
      },
    });

    const result: any = {
      fcmToken: data.FCMToken.map((e) => e.token),
      id: data.FCMToken.map((e) => e.id),
    };
    return result;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.fCMToken.delete({
      where: {
        id: id,
      },
    });
  }

  async update(data: fcmTokenUpdate): Promise<fcmTokens> {
    return await this.prisma.fCMToken.update({
      where: { id: data.id },
      data: {
        token: data.token,
      },
    });
  }
}
