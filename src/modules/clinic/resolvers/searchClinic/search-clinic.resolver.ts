import { Resolver, Query, Args } from '@nestjs/graphql';
import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { SearchClinicService } from '../../usecases/searchClinic/search-clinic.service';

@Resolver()
export class FindSearchClinicResolver {
  constructor(private readonly repo: SearchClinicService) {}

  @Query(() => [NearByclinicResponse])
  async SearchClinic(@Args('name') name: string, @Args('page') page: number) {
    return await this.repo.Search(name, page);
  }
}
