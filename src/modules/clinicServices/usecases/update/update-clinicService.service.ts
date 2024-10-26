import { Injectable } from '@nestjs/common';
import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';

@Injectable()
export class UpdateServicesClinicService {
  constructor(private readonly repo: IServicesClinicRepository) {}

  async update(
    id: string,
    data: UpdateClinicServicesInput,
  ): Promise<ServicesClinics> {
    const services = await this.repo.update(id, data);
    return services;
  }
}
