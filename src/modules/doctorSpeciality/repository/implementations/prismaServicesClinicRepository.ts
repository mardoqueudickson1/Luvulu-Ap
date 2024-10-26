import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { ISpecialityRepository } from '../interface/IServicesClinicRepository';
import { ResponseUser } from 'src/modules/patient/dtos/reponsePatientOutput';
import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { SpecialityResponse } from '../../dtos/specialiaty-output';
import { Specialities } from '../../entities/specialiaty.entity';

@Injectable()
export class PrismaServicesClinicRepositoy implements ISpecialityRepository {
  constructor(private prisma: PrismaService) {}
  async findByName(name: string): Promise<Specialities> {
    return await this.prisma.speciality.findFirst({
      where: { name: name },
    });
  }
  async create(data: CreateSpecialityInput): Promise<Specialities> {
    try {
      return await this.prisma.speciality.create({ data });
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar especialidade');
    }
  }
  findUser(id: string): Promise<ResponseUser> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  remove({ id }: { id: string }): Promise<void> {
    console.log(id);

    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<SpecialityResponse[]> {
    try {
      return await this.prisma.speciality.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar especialidade');
    }
  }
}
