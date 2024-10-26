import { Resolver, Args, Query } from '@nestjs/graphql';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { FindOndeConsultationTypeService } from '../../usecases/find-one/find-onde-consultationType.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class FindOneConsultationTypesResolver {
  constructor(private readonly typeConst: FindOndeConsultationTypeService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ConsultationTypes)
  async findOneConsultationType(
    @Args('id', { type: () => String }) id: string,
  ) {
    return await this.typeConst.findOne(id);
  }
}
