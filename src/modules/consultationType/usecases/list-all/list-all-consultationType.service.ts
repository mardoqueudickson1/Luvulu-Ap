import { Injectable } from '@nestjs/common';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';

@Injectable()
export class ListAllConsultationTypeService {
  constructor(private readonly typeRepo: IConsultatioTypeRepository) {}

  async findAll(): Promise<ConsultationTypes[]> {
    return await this.typeRepo.findAll();
  }
}
