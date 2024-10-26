import { Resolver, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { RemoveClinicRatingService } from '../../usecases/remove/remove-rating.service';

@Resolver()
export class RemoveClinicRatingResolver {
  constructor(private readonly repo: RemoveClinicRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ClinicRatings)
  async RemoveClinicRating(@Args('id', { type: () => String }) id: string) {
    return await this.repo.remove(id);
  }
}
