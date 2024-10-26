import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IConfirmationCodeRepository } from '../interfaces/IConfirmationCode';
import { CreateConfirmationCode } from '../../dtos/create-confirmation-code';
import { ConfirmationsCode } from '../../entities/confirmationCode';

@Injectable()
export class PrismaConfirmationCodeRepository
  implements IConfirmationCodeRepository
{
  constructor(private prisma: PrismaService) {}

  async create(data: CreateConfirmationCode): Promise<ConfirmationsCode> {
    const confirmation = await this.prisma.passwordConfirmationCode.create({
      data: {
        code: data.code,
        expiresAt: data.expiresAt,
        userId: data.userId,
      },
    });
    return confirmation;
  }

  async verifyConfirmationCode(userId: string, code: string): Promise<boolean> {
    const confirmationCode =
      await this.prisma.passwordConfirmationCode.findUnique({
        where: { userId, code },
      });

    if (!confirmationCode || confirmationCode.expiresAt < new Date()) {
      throw new NotFoundException('Código inválido ou expirado.');
    }

    await this.deleteConfirmationCode(confirmationCode.id);

    return true;
  }

  async deleteConfirmationCode(id: string): Promise<void> {
    await this.prisma.passwordConfirmationCode.delete({
      where: { id: id },
    });
  }
}
