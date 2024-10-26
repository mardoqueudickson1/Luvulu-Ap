import { IPatientRepository } from '../../../patient/repository/interface/IPatientRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class RemovePatientService {
  constructor(private readonly patientRepo: IPatientRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const patient = await this.patientRepo.findById(id);

      if (!patient) {
        throw new NotFoundException('Ups, paciente não encontrado.');
      }

      return await this.patientRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
