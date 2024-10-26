import { messages } from 'src/utils/shared/errorsMessages';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FindMedicalHistoryByDoctorIdService {
  constructor(private readonly medicalHistoryRepo: IMedicalHistoryRepository) {}

  async execute(doctorId: string): Promise<MedicalHistoryEntity[]> {
    const medicalHistory =
      await this.medicalHistoryRepo.getMedicalHistoriesByDoctorId(doctorId);

    if (!medicalHistory) {
      throw new NotFoundException(messages.medicalHistoryNotFound);
    }
    return medicalHistory;
  }
}
