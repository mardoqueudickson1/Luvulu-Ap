import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdateClinicService } from '../../usecases/update/update-clinic.service';
import { Clinics } from '../../entities/clinic';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UpdateClinicInput } from '../../dtos/update-clinic.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver('clinic')
export class UpdateClinicResolver {
  constructor(private readonly cllinicSerivce: UpdateClinicService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Clinics)
  async updateClinic(
    @Args('data') data: UpdateClinicInput,
    @CurrentUser() user: any,
  ) {
    const clinicId = await this.cllinicSerivce.getClinicID(user.id);
    data.id = clinicId.instition.id;
    return await this.cllinicSerivce.update(data);
  }
}
