import { Resolver, Query } from '@nestjs/graphql';
import { ListAllTopRatingService } from '../../usecases/list-all -top-rated/list-all-top-rated.service';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';

@Resolver()
export class FindAllTopRatedngResolver {
  constructor(private readonly repo: ListAllTopRatingService) {}

  @Query(() => [TopResponseAllDoctor])
  async findAllTopRated() {
    return await this.repo.findAllTopRated();
  }
}
