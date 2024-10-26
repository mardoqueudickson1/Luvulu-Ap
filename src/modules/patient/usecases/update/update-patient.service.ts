import { BadRequestException, Injectable } from '@nestjs/common';
import { Patients } from '../../entities/patient.entity';
import { UpdatePatientInput } from '../../dtos/update-patient.input';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class UpdatePatientService {
  constructor(private readonly repo: IPatientRepository) {}

  async update(data: UpdatePatientInput): Promise<Patients> {
    try {
      const patient = await this.repo.update(data);
      return patient;
    } catch (error) {
      throw new BadRequestException(messages.errorServer);
    }
  }

  async getPatientID(patientId: string) {
    const patient = await this.repo.findPatientByUserId(patientId);
    return patient;
  }
}
