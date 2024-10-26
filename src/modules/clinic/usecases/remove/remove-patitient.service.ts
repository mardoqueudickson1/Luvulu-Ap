import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class RemoveClinicService {
  constructor(private readonly clinicRepo: IClinicRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const clinic = await this.clinicRepo.findById(id);

      if (!clinic) {
        throw new NotFoundException('Ups, Clínica não encontrado.');
      }

      return await this.clinicRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
