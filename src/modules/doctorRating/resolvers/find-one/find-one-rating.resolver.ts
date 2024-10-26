import { Resolver, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Ratings } from '../../entities/rating.entity';
import { FindOneRatingService } from '../../usecases/find-one/find-onde-rating.service';

@Resolver()
export class FindOneRatingResolver {
  constructor(private readonly repo: FindOneRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Ratings)
  async findOneRating(@Args('id', { type: () => String }) id: string) {
    return await this.repo.findOne(id);
  }
}
