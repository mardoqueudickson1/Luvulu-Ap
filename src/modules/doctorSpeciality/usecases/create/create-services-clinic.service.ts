import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { ISpecialityRepository } from '../../repository/interface/IServicesClinicRepository';

@Injectable()
export class CreateSpecialityService {
  constructor(private readonly repo: ISpecialityRepository) {}

  async create(input: CreateSpecialityInput) {
    try {
      const nameUpperCase = input.name.toUpperCase();

      const alreadyExist = await this.repo.findByName(nameUpperCase);

      if (alreadyExist) {
        throw new BadRequestException('Especialidade já existe');
      }
      input.name = nameUpperCase;
      const services = await this.repo.create(input);

      return services;
    } catch (error) {
      throw error;
    }
  }
}
