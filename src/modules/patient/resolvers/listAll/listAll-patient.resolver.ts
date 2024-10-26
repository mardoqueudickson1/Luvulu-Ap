import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import { ListAllPatientService } from '../../usecases/listAll/listaAll-patitient.service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => FindAllPatientResponse)
export class ListAllPatientResolver {
  constructor(private readonly patientService: ListAllPatientService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [FindAllPatientResponse])
  async findAllPatient() {
    return await this.patientService.listAll();
  }
}
