import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindOneClinicRatedService } from '../../usecases/find-one-rated/find-one-rated.service';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';

@Resolver()
export class FindOneClinicRatedResolver {
  constructor(private readonly repo: FindOneClinicRatedService) {}

  @Query(() => TopResponseAllClinic)
  async findOneRatedClinic(@Args('id', { type: () => String }) id: string) {
    return await this.repo.findOne(id);
  }
}
