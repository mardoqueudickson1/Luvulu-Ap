import { CreateClinicInput } from '../../dtos/create-clinic.input';
import { Clinics } from '../../entities/clinic';
import { CreateClinicService } from '../../usecases/create/create-clinic.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver('clinic')
export class CreateClinicResolver {
  constructor(private readonly clinicService: CreateClinicService) {}

  @Mutation(() => Clinics)
  async createClinic(@Args('data') createClinicDTO: CreateClinicInput) {
    return await this.clinicService.create(createClinicDTO);
  }
}
