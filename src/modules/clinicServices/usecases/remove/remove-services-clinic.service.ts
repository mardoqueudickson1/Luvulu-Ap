import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class RemoveServicesClinicService {
  constructor(private readonly serviceRepo: IServicesClinicRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const services = await this.serviceRepo.findById(id);

      if (!services) {
        throw new NotFoundException('Ups, Serviço não encontrado.');
      }

      return await this.serviceRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
