import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Doctors } from '../../entities/doctor.entity';
import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UpdateDoctorService } from '../../usecases/update/update-doctor.service';

@Resolver('updateDoctor')
export class UpdateDoctorResolver {
  constructor(private readonly doctorService: UpdateDoctorService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Doctors)
  async updateDoctorInfo(
    @Args('data') data: UpdateDoctorInput,
    @CurrentUser() user: any,
  ) {
    const doctorId = await this.doctorService.getDoctorId(user.id);
    data.id = doctorId.Doctor.id;
    return await this.doctorService.update(data);
  }
}
