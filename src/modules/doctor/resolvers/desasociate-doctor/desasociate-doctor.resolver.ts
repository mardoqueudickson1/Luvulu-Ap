import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { AssociateDoctorInput } from '../../dtos/doctorInstitution';
import { DoctorInstitutions } from '../../entities/doctor.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { DesasociateDoctorService } from '../../usecases/desasociate-doctor/desasociate-doctor.service';

@Resolver()
export class DesasociateDoctorResolver {
  constructor(private readonly repo: DesasociateDoctorService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DoctorInstitutions)
  async desasociateDoctor(
    @CurrentUser() user: UserProfileResponse,
    @Args('data') input: AssociateDoctorInput,
  ): Promise<{ message: string }> {
    input.institutionId = user.id;
    return await this.repo.desasociateDoctor(input);
  }
}
