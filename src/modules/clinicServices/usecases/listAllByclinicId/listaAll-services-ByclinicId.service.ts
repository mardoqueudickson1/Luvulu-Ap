import { ServicesClinics } from '../../entities/services-clinic.entity';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllServicesBydClinicIdClinicService {
  constructor(private readonly servicesClinicRepo: IServicesClinicRepository) {}

  async listAll(clinicId: string): Promise<ServicesClinics[]> {
    const services = await this.servicesClinicRepo.findAll(clinicId);
    return services;
  }
}
