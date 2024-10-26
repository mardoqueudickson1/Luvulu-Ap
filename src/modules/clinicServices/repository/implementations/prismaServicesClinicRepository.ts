import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IServicesClinicRepository } from '../interface/IServicesClinicRepository';
import { CreateServiceInput } from '../../dtos/create-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { ClinicServicesType } from '../../dtos/clinic.types';
import { ResponseUser } from '../../dtos/clinic-services-output';
import { messages } from 'src/utils/shared/errorsMessages';
import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';

@Injectable()
export class PrismaServicesClinicRepositoy
  implements IServicesClinicRepository
{
  constructor(private prisma: PrismaService) {}

  async create(input: CreateServiceInput): Promise<ServicesClinics> {
    return this.prisma.services.create({
      data: input,
    });
  }

  async findUser(id: string): Promise<ResponseUser> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
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

    const result: ResponseUser = {
      Institution: user.Institution[0],
    };
    return result;
  }

  async findById(id: string): Promise<ServicesClinics> {
    return await this.prisma.services.findUnique({ where: { id: id } });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.services.delete({ where: { id: id } });
  }

  async findAll(clinicId: string): Promise<ServicesClinics[]> {
    return await this.prisma.services.findMany({
      where: { id: clinicId },
      include: { institution: true },
    });
  }

  async findByName(name: string): Promise<ServicesClinics> {
    return await this.prisma.services.findFirst({
      where: {
        name: name,
      },
    });
  }

  async findClinicById(id: string): Promise<ClinicServicesType> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        Institution: {
          select: {
            id: true,
          },
        },
      },
    });

    const result: ClinicServicesType = {
      clinic: user.Institution[0],
    };
    return result;
  }

  async update(
    id: string,
    input: UpdateClinicServicesInput,
  ): Promise<ServicesClinics> {
    const services = await this.prisma.services.update({
      where: { id },
      data: input,
    });

    return services;
  }
}
