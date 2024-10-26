import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { IConsultatioTypeRepository } from '../interface/IConsultatioTypeRepository';
import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { updateConsultatinoType } from '../../dtos/update-consulationType.input';

@Injectable()
export class ConsultationTypeRepositoy implements IConsultatioTypeRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateConsultatinoTypeInput): Promise<ConsultationTypes> {
    return this.prisma.consultationType.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  async update(
    id: string,
    data: updateConsultatinoType,
  ): Promise<ConsultationTypes> {
    return this.prisma.consultationType.update({
      where: { id: id },
      data: data,
    });
  }

  async findById(id: string): Promise<ConsultationTypes> {
    return await this.prisma.consultationType.findUnique({ where: { id: id } });
  }

  async findByName(name: string): Promise<ConsultationTypes> {
    return await this.prisma.consultationType.findFirst({
      where: { name: name },
    });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.consultationType.delete({ where: { id: id } });
  }

  async findAll(): Promise<ConsultationTypes[]> {
    return await this.prisma.consultationType.findMany();
  }
}
