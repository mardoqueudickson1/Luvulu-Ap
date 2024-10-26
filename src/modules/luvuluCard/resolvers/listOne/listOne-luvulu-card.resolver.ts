import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { ListOneLuvuluCardService } from '../../usecases/listOne/lista-one-luvulu-card.service';

@Resolver()
export class FindOneLuvuluCardResolver {
  constructor(private readonly repo: ListOneLuvuluCardService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => LuvuluCardResponse)
  async findOneLuvuluCard(@Args('id') id: string) {
    return await this.repo.listOne(id);
  }
}
