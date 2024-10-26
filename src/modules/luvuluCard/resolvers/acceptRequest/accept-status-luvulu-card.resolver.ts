import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { ChangeStatusLuvuluCardService } from '../../usecases/changestatus/change-status-luvulu-card.service';
import { UpdateLuvuluCard } from '../../dtos/update-luvulu-card';

@Resolver()
export class CancelLuvuluCardRequestResolver {
  constructor(private readonly repo: ChangeStatusLuvuluCardService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => LuvuluCard)
  async CancelLuvuluCardRequest(@Args('data') data: UpdateLuvuluCard) {
    return await this.repo.changeStatus(data);
  }
}
