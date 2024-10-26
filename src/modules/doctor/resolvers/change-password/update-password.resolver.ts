import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { changeDoctorPasswordInput } from '../../dtos/change-password';
import { UpdateDoctorPasswordService } from '../../usecases/change-password/update-password.service';
import { Doctors } from '../../entities/doctor.entity';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver('change-password')
export class UpdateDoctorPasswordResolver {
  constructor(private readonly passwordService: UpdateDoctorPasswordService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Doctors)
  async changeDoctorPassword(
    @Args('data') data: changeDoctorPasswordInput,
    @CurrentUser() user: any,
  ) {
    const doctorId = await this.passwordService.getDoctorId(user.id);
    data.doctorId = doctorId.Doctor.id;
    return await this.passwordService.update(data);
  }
}
