import { Injectable, NotFoundException } from '@nestjs/common';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';

@Injectable()
export class RemoveDoctorService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const doctor = await this.doctorRepo.findById(id);

      if (!doctor) {
        throw new NotFoundException('Ups, doctor não encontrado.');
      }

      return await this.doctorRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
