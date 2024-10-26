import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { CurrentUser } from '../../../auth/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { ProfileDoctorService } from '../../usecases/perfil/perfil-doctor.service';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';

@Resolver()
export class ProfiledoctorResolver {
  constructor(private readonly profileDocta: ProfileDoctorService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ResponseProfileDoctor)
  async doctorProfile(
    @CurrentUser() user: UserProfileResponse,
  ): Promise<ResponseProfileDoctor> {
    return await this.profileDocta.profile(user.id);
  }
}
