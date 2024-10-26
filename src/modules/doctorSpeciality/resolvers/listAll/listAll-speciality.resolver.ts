import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';

import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { ListAllSpecialityService } from '../../usecases/listAll/listaAll-services-clinic.service';
import { SpecialityResponse } from '../../dtos/specialiaty-output';

@Resolver()
export class FindAllSpecialityResolver {
  constructor(private readonly servicesRepo: ListAllSpecialityService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [SpecialityResponse])
  async findALlSpeciality() {
    return await this.servicesRepo.listAll();
  }
}
