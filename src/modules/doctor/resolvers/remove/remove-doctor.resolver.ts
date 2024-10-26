import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { Doctors } from '../../entities/doctor.entity';
import { RemoveDoctorService } from '../../usecases/remove/remove-doctor.service';

@Resolver('doctor')
export class RemoveDoctorResolver {
  constructor(private readonly patientService: RemoveDoctorService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Doctors)
  async removeDoctor(@Args('id', { type: () => Int }) id: string) {
    return await this.patientService.remove(id);
  }
}
