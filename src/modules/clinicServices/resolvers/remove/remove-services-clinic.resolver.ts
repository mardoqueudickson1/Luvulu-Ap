import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { RemoveServicesClinicService } from '../../usecases/remove/remove-services-clinic.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';

@Resolver('services-clinic')
export class RemoveServicesClinicResolver {
  constructor(
    private readonly servicesClinicRepo: RemoveServicesClinicService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ServicesClinics)
  async removeServicesClinic(@Args('id', { type: () => Int }) id: string) {
    return await this.servicesClinicRepo.remove(id);
  }
}
