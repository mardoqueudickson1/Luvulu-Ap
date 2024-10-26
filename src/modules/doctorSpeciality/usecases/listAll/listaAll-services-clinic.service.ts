import { Injectable } from '@nestjs/common';
import { SpecialityResponse } from '../../dtos/specialiaty-output';
import { ISpecialityRepository } from '../../repository/interface/IServicesClinicRepository';

@Injectable()
export class ListAllSpecialityService {
  constructor(private readonly repo: ISpecialityRepository) {}

  async listAll(): Promise<SpecialityResponse[]> {
    const services = await this.repo.findAll();
    return services;
  }
}
