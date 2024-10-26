import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { Patients } from '../../../patient/entities/patient.entity';
import { RemovePatientService } from '../../../patient/usecases/remove/remove-patitient.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';

@Resolver('patient')
export class RemovePatientResolver {
  constructor(private readonly patientService: RemovePatientService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Patients)
  async removePatient(@Args('id', { type: () => Int }) id: string) {
    return await this.patientService.remove(id);
  }
}
