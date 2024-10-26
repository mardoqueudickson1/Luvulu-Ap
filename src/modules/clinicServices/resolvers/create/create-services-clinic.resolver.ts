import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { CreateServiceInput } from '../../dtos/create-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { CreateServicesClinicService } from '../../usecases/create/create-services-clinic.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver('services-clinic')
export class CreateServicesClinicResolver {
  constructor(private readonly servicesRepo: CreateServicesClinicService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ServicesClinics)
  async createServicesClinic(
    @Args('data') input: CreateServiceInput,
    @CurrentUser() user: any,
  ) {
    input.institutionId = user.id;
    return await this.servicesRepo.create(input);
  }
}
