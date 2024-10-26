import { Resolver, Args, Query } from '@nestjs/graphql';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { FindOneClinicRatingService } from '../../usecases/find-one/find-onde-rating.service';

@Resolver()
export class FindOneClinicRatingResolver {
  constructor(private readonly repo: FindOneClinicRatingService) {}

  @Query(() => ClinicRatings)
  async findOneClinicRating(@Args('id', { type: () => String }) id: string) {
    return await this.repo.findOne(id);
  }
}
