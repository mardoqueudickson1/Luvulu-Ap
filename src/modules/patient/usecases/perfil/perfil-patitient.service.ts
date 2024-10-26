import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { messages } from '../../../../utils/shared/errorsMessages';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientProfileOutput } from '../../dtos/profile-patient.output';

@Injectable()
export class ProfilePatientService {
  constructor(private readonly patitientRepo: IPatientRepository) {}

  async profile(id: string): Promise<PatientProfileOutput> {
    try {
      const patitient = await this.patitientRepo.profile(id);

      if (!patitient) {
        throw new NotFoundException(messages.patientNotFound);
      }
      return patitient;
    } catch (error) {
      throw error;
    }
  }
}
