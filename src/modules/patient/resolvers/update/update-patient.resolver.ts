import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdatePatientService } from '../../usecases/update/update-patient.service';
import { UpdatePatientInput } from '../../dtos/update-patient.input';
import { Patients } from '../../entities/patient.entity';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver('patient')
export class UpdatePatientResolver {
  constructor(private readonly patientSerivce: UpdatePatientService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Patients)
  async updatePatient(
    @Args('data') data: UpdatePatientInput,
    @CurrentUser() user: any,
  ) {
    const patientId = await this.patientSerivce.getPatientID(user.id);
    data.id = patientId.patient.id;
    return await this.patientSerivce.update(data);
  }
}
