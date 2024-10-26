import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { CurrentUser } from '../../../auth/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { ProfileClinicService } from '../../usecases/profile/perfil-clinic.service';

@Resolver()
export class ProfileClinicResolver {
  constructor(private readonly profileClinic: ProfileClinicService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ProfileClinicOutput)
  async ProfileClinic(
    @CurrentUser() user: UserProfileResponse,
  ): Promise<ProfileClinicOutput> {
    return await this.profileClinic.profile(user.id);
  }
}
