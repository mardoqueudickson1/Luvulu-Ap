import { Resolver, Query } from '@nestjs/graphql';
import { Ratings } from '../../entities/rating.entity';
import { ListAllRatingService } from '../../usecases/list-all/list-all-rating.service';

@Resolver()
export class FindAllRatingResolver {
  constructor(private readonly repo: ListAllRatingService) {}

  @Query(() => [Ratings])
  async findAllRating() {
    return await this.repo.findAll();
  }
}
