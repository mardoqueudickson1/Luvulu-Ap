import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { CreateConsulatationTypeService } from '../../usecases/create/create-consultatioType.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver('consulatation-type')
export class CreateConsultationTypeResolver {
  constructor(private readonly typeRepo: CreateConsulatationTypeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ConsultationTypes)
  async createConsulatationType(
    @Args('data') input: CreateConsultatinoTypeInput,
  ) {
    return await this.typeRepo.create(input);
  }
}
