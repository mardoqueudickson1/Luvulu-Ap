import { Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ListAllDoctorByclinicIDService } from '../../usecases/list-All-by-clinicID/list-All-by-clinicID.service';
import { UseGuards } from '@nestjs/common';
import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';

@Resolver()
export class ListAllDoctorByclinicIDResolver {
  constructor(private readonly doctorService: ListAllDoctorByclinicIDService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllDoctor])
  async findAllDoctorsByClinicID(@CurrentUser() user: UserProfileResponse) {
    return await this.doctorService.listAllByClinicID(user.id);
  }
}
