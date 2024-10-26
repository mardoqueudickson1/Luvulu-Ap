import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ResponseClinic } from '../../dtos/clinicReponse';
import { FindOneClinicService } from '../../usecases/findOne/findOne-clinic.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class FindOneClinicResolver {
  constructor(private readonly clinicService: FindOneClinicService) {}

  @Query(() => ResponseClinic)
  @UseGuards(GqlAuthGuard)
  async findOneClinicId(@Args('id', { type: () => String }) id: string) {
    return await this.clinicService.findOne(id);
  }
}
