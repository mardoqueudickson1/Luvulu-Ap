import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from 'src/utils/shared/errorsMessages';
import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';

@Injectable()
export class RemoveHistoryMedicalService {
  constructor(private readonly medicalHistoryRepo: IMedicalHistoryRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const notification = await this.medicalHistoryRepo.findById(id);

      if (!notification) {
        throw new NotFoundException(messages.medicalHistoryNotFound);
      }

      return await this.medicalHistoryRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
