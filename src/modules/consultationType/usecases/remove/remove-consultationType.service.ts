import { Injectable, NotFoundException } from '@nestjs/common';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class RemoveConsultationTypeService {
  constructor(private readonly typeRepo: IConsultatioTypeRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const typeConsult = await this.typeRepo.findById(id);

      if (!typeConsult) {
        throw new NotFoundException(messages.typeNotFound);
      }

      return await this.typeRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
