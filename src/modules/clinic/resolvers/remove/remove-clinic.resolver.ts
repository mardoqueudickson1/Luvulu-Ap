import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { Clinics } from '../../entities/clinic';
import { RemoveClinicService } from '../../usecases/remove/remove-patitient.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';

@Resolver('clinic')
export class RemoveClinicResolver {
  constructor(private readonly clinicService: RemoveClinicService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Clinics)
  async removePatient(@Args('id', { type: () => Int }) id: string) {
    return await this.clinicService.remove(id);
  }
}
