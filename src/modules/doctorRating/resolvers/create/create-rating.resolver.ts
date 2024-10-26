import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CreateRatingInput } from '../../dtos/create-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { CreateRatingService } from '../../usecases/create/create-rating.service';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver('rating')
export class CreateRatingResolver {
  constructor(private readonly repo: CreateRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Ratings)
  async createRating(
    @Args('data') input: CreateRatingInput,
    @CurrentUser() user: UserProfileResponse,
  ): Promise<Ratings> {
    input.userId = user.id;
    return await this.repo.create(input);
  }
}
