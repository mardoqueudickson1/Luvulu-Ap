import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Clinics } from '../../entities/clinic';
import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { UpdateClinicPasswordService } from '../../usecases/change-password/update-password.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver('change-password')
export class UpdateClinicPasswordResolver {
  constructor(private readonly passwordService: UpdateClinicPasswordService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Clinics)
  async changeClinicPassword(
    @Args('data') data: ClinicUpdatePasswordInput,
    @CurrentUser() user: any,
  ) {
    const clinicId = await this.passwordService.getClinicID(user.id);
    data.clinicId = clinicId.instition.id;
    return await this.passwordService.update(data);
  }
}
