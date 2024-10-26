import { Resolver, Query, Args } from '@nestjs/graphql';
import { FilterDoctorService } from '../../usecases/filter/filter-doctor.service';
import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';

@Resolver()
export class FilterDoctorResolver {
  constructor(private readonly repo: FilterDoctorService) {}

  @Query(() => [TopResponseAllDoctor])
  async filterDoctor(@Args('data') data: DoctorFilterOptions) {
    return await this.repo.filterDoctor(data);
  }
}
