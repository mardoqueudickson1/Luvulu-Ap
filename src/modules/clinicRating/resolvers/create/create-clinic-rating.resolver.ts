import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { CreateClinicRatingService } from '../../usecases/create/create-rating.service';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver('rating')
export class CreateClinicRatingResolver {
  constructor(private readonly repo: CreateClinicRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ClinicRatings)
  async createClinicRating(
    @Args('data') input: CreateClinicRatingInput,
    @CurrentUser() user: UserProfileResponse,
  ): Promise<ClinicRatings> {
    input.userId = user.id;
    return await this.repo.create(input);
  }
}
