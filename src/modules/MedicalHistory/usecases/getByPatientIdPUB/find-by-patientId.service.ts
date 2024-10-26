import { messages } from 'src/utils/shared/errorsMessages';

import { Injectable, NotFoundException } from '@nestjs/common';
import { IMedicalHistoryRepository } from '../../repository/interface/IMedicalHistoryRepository';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FindMedicalHistoryByPatientIdPUBService {
  constructor(private readonly repo: IMedicalHistoryRepository) {}

  async execute(id: string): Promise<GetMedicalHsitoryByPatientIdOutput[]> {
    const medicalHistory = await this.repo.getMedicalHistoryByPatientId(id);

    for (const history of medicalHistory) {
      if (history.doctor.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(
          history.doctor.avatar,
        );
        history.doctor.avatar = url.toString();
      }
    }

    if (medicalHistory.length <= 0) {
      throw new NotFoundException(messages.medicalHistoryNotFound);
    }
    return medicalHistory;
  }
}
