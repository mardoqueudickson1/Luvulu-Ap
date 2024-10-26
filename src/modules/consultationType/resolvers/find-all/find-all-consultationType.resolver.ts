import { ConsultationTypes } from '../../entities/consultationType.entity';
import { Resolver, Query } from '@nestjs/graphql';
import { ListAllConsultationTypeService } from '../../usecases/list-all/list-all-consultationType.service';

@Resolver()
export class FindAllConsultationTypesResolver {
  constructor(
    private readonly consulTypeService: ListAllConsultationTypeService,
  ) {}

  @Query(() => [ConsultationTypes])
  async findAllConsultationType() {
    return await this.consulTypeService.findAll();
  }
}
