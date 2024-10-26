import { Resolver, Query, Args } from '@nestjs/graphql';
import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { FilterClinicService } from '../../usecases/filter/filter-clinic.service';
import { FilterOptions } from '../../dtos/clinic-filter-option';

@Resolver()
export class FilterClinicResolver {
  constructor(private readonly repo: FilterClinicService) {}

  @Query(() => [NearByclinicResponse])
  async filterClinic(@Args('data') filterOptions: FilterOptions) {
    return await this.repo.filterClinic(filterOptions);
  }
}
