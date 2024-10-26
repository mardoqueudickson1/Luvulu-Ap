import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { UpdateServicesClinicService } from '../../usecases/update/update-clinicService.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver('ServicesClinics')
export class UpdateClinicServicesResolver {
  constructor(private readonly servicesClinic: UpdateServicesClinicService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ServicesClinics)
  async updateServicesClinic(
    @Args('clinicId') clinicId: string,
    @Args('data') data: UpdateClinicServicesInput,
  ) {
    return await this.servicesClinic.update(clinicId, data);
  }
}
