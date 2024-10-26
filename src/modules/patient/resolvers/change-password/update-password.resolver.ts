import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Patients } from '../../entities/patient.entity';
import { changePasswordInput } from '../../dtos/change-password';
import { UpdatePasswordService } from '../../usecases/change-password/update-password.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver('change-password')
export class UpdatePasswordResolver {
  constructor(private readonly passwordService: UpdatePasswordService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Patients)
  async changePatientPassword(
    @Args('data') data: changePasswordInput,
    @CurrentUser() user: any,
  ) {
    const patientId = await this.passwordService.getPatientID(user.id);
    data.patientId = patientId.patient.id;
    return await this.passwordService.update(data);
  }
}
