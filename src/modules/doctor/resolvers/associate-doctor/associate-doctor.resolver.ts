import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { AssociateDoctorInput } from '../../dtos/doctorInstitution';
import { AssociateDoctorService } from '../../usecases/associate-doctor/associate-doctor.service';
import { DoctorInstitutions } from '../../entities/doctor.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class AssociateDoctorResolver {
  constructor(private readonly repo: AssociateDoctorService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DoctorInstitutions)
  async AssociateDoctor(
    @CurrentUser() user: UserProfileResponse,
    @Args('data') input: AssociateDoctorInput,
  ) {
    input.institutionId = user.id;
    return await this.repo.associateDoctor(input);
  }
}
