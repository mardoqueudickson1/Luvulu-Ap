import { Resolver, Query, Args } from '@nestjs/graphql';
import { findClinicNearByService } from '../../usecases/findClinicNearBy/find-clinic-nearBy.service';
import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';

@Resolver()
export class FindClinicNearByResolver {
  constructor(private readonly repo: findClinicNearByService) {}

  @Query(() => [NearByclinicResponse])
  async findClinicNearBy(
    @Args('pacientLatitude') pacientLatitude: number,
    @Args('pacientlongitude') pacientlongitude: number,
  ) {
    return await this.repo.listNearbyClinics(pacientLatitude, pacientlongitude);
  }
}
