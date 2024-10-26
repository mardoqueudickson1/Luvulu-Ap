import { Resolver, Query } from '@nestjs/graphql';
import { ListAllTopClinicRatingService } from '../../usecases/list-all -top-rated/list-all-top-rated.service';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';

@Resolver()
export class FindAllTopClinicRatedResolver {
  constructor(private readonly repo: ListAllTopClinicRatingService) {}

  @Query(() => [TopResponseAllClinic])
  async findAllTopClinicRated() {
    return await this.repo.findAllTopRated();
  }
}
