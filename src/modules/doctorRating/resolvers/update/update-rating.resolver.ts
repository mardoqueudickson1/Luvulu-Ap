import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { UpdateRatingService } from '../../usecases/update/update-rating.service';

@Resolver('consultation-type')
export class UpdateRatingResolver {
  constructor(private readonly repo: UpdateRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Ratings)
  async UpdateRating(@Args('data') data: updateRating) {
    return await this.repo.update(data.id, data);
  }
}
