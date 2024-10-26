import { ClinicOutput, ClinicResponse } from '../../dtos/findAll-clinic.output';
import { ListAllClinicService } from '../../usecases/listAll/listaAll-clinic.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => ClinicOutput)
export class ListAllClinicResolver {
  constructor(private readonly cliniService: ListAllClinicService) {}

  @Query(() => [ClinicResponse])
  async findAllClinic() {
    return await this.cliniService.listAll();
  }
}
