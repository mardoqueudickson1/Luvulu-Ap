import { Injectable, NotFoundException } from '@nestjs/common';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class FindOndeConsultationTypeService {
  constructor(private readonly typeRepo: IConsultatioTypeRepository) {}

  async findOne(id: string): Promise<ConsultationTypes> {
    const typeConsult = await this.typeRepo.findById(id);

    if (!typeConsult) {
      throw new NotFoundException(messages.typeNotFound);
    }

    return await this.typeRepo.findById(id);
  }
}
