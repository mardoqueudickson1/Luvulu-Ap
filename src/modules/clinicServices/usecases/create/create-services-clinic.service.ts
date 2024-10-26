import { IClinicRepository } from '../../../clinic/repository/interface/IClinicRepository';
import { CreateServiceInput } from '../../dtos/create-clinic-services.input';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { messages } from '../../../../utils/shared/errorsMessages';

@Injectable()
export class CreateServicesClinicService {
  constructor(
    private readonly servicesClinicRepo: IServicesClinicRepository,
    private clinicRepo: IClinicRepository,
  ) {}

  async create(input: CreateServiceInput) {
    try {
      const nameUpperCase = input.name.toUpperCase();

      const serviceAlreadyExist =
        await this.servicesClinicRepo.findByName(nameUpperCase);

      if (serviceAlreadyExist) {
        throw new BadRequestException(messages.servicesFound);
      }

      const { clinic } = await this.servicesClinicRepo.findClinicById(
        input.institutionId,
      );

      if (!clinic) {
        throw new BadRequestException(messages.clinicNotFound);
      }

      const services = await this.servicesClinicRepo.create({
        name: nameUpperCase,
        description: input.description,
        price: input.price,
        institutionId: clinic.id,
      });

      return services;
    } catch (error) {
      throw error;
    }
  }
}
