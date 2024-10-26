import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { CurrentUser } from '../../../auth/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { PatientProfileOutput } from '../../dtos/profile-patient.output';
// import { Patients } from '@modules/patient/entities/patient.entity';
import { ProfilePatientService } from '../../usecases/perfil/perfil-patitient.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ProfilePatientResolver {
  constructor(private readonly patientService: ProfilePatientService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => PatientProfileOutput)
  async PatientProfile(
    @CurrentUser() user: UserProfileResponse,
  ): Promise<PatientProfileOutput> {
    return await this.patientService.profile(user.id);
  }
}
