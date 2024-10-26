import { Resolver, Query, Args } from '@nestjs/graphql';
import { SearchDoctorService } from '../../usecases/searchDoctor/search-doctor.service';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';

@Resolver()
export class SearchDoctorResolver {
  constructor(private readonly repo: SearchDoctorService) {}

  @Query(() => [TopResponseAllDoctor])
  async SearchDoctor(@Args('name') name: string, @Args('page') page: number) {
    return await this.repo.searchDoctor(name, page);
  }
}
