import { Resolver, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { RemoveRatingService } from '../../usecases/remove/remove-rating.service';
import { Ratings } from '../../entities/rating.entity';

@Resolver()
export class RemoveRatingResolver {
  constructor(private readonly repo: RemoveRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Ratings)
  async RemoveRating(@Args('id', { type: () => String }) id: string) {
    return await this.repo.remove(id);
  }
}
