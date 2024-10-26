import { messages } from 'src/utils/shared/errorsMessages';

import { Injectable, NotFoundException } from '@nestjs/common';
import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';

@Injectable()
export class FindOneMedicalHistoryService {
  constructor(private readonly medicalHistoryRepo: IMedicalHistoryRepository) {}

  async findOne(id: string): Promise<MedicalHistoryEntity> {
    const medicalHistory = await this.medicalHistoryRepo.findById(id);

    if (!medicalHistory) {
      throw new NotFoundException(messages.medicalHistoryNotFound);
    }
    return medicalHistory;
  }
}
