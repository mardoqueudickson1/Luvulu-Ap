import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';

import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ListAllLuvuluCardService } from '../../usecases/listAll/listaAll-luvulu-card..service';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';

@Resolver()
export class FindAllLuvuluCardResolver {
  constructor(private readonly repo: ListAllLuvuluCardService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [LuvuluCardResponse])
  async findAllLuvuluCard(@CurrentUser() user: any) {
    return await this.repo.listAll(user.id);
  }
}
