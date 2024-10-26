import { Resolver, Query } from '@nestjs/graphql';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { ListAllClinicRatingService } from '../../usecases/list-all/list-all-rating.service';

@Resolver()
export class FindAllClinicRatingResolver {
  constructor(private readonly repo: ListAllClinicRatingService) {}

  @Query(() => [ClinicRatings])
  async findAllClinicRating() {
    return await this.repo.findAll();
  }
}
