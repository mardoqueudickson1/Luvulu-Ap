import { PrismaService } from '../../../prisma/prisma.service';

import { IUploadRepository } from '../interface/IUploadRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUploadRepositoy implements IUploadRepository {
  constructor(private prisma: PrismaService) {}

  async update(id: string, avatar: string) {
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        avatar: avatar,
      },
    });
  }
}
