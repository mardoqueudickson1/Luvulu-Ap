import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { CardStatus } from '@prisma/client';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { CancelLuvuluCardRequestService } from '../../usecases/cancelRequest/change-status-luvulu-card.service';

@Resolver()
export class AcceptLuvuluCardRequestResolver {
  constructor(private readonly repo: CancelLuvuluCardRequestService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => LuvuluCard)
  async acceptLuvuluCardRequest(
    @Args('status') status: CardStatus,
    @Args('id') id: string,
  ) {
    return await this.repo.changeStatus(status, id);
  }
}
