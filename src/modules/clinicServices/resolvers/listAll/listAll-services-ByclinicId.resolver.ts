import { ServicesClinics } from '../../entities/services-clinic.entity';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { ListAllServicesBydClinicIdClinicService } from '../../usecases/listAllByclinicId/listaAll-services-ByclinicId.service';

@Resolver(() => ServicesClinics)
export class ListAllServicesByClinicIdResolver {
  constructor(
    private readonly servicesClinicRepo: ListAllServicesBydClinicIdClinicService,
  ) {}

  @Query(() => [ServicesClinics])
  async findAllServicesByClinicId(@Args('clinicId') clinicId: string) {
    return await this.servicesClinicRepo.listAll(clinicId);
  }
}
