import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';

import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { Specialities } from '../../entities/specialiaty.entity';
import { CreateSpecialityService } from '../../usecases/create/create-services-clinic.service';

@Resolver('services-clinic')
export class CreateSpecialityResolver {
  constructor(private readonly servicesRepo: CreateSpecialityService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Specialities)
  async createSpeciality(@Args('data') input: CreateSpecialityInput) {
    return await this.servicesRepo.create(input);
  }
}
