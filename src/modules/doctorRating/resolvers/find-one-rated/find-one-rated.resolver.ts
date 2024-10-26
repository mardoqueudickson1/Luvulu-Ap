import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindOneRatedService } from '../../usecases/find-one-rated/find-one-rated.service';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';

@Resolver()
export class FindOneRatedResolver {
  constructor(private readonly repo: FindOneRatedService) {}

  @Query(() => TopResponseAllDoctor)
  async findOneRatedDoctor(@Args('id') id: string) {
    return await this.repo.findOne(id);
  }
}
