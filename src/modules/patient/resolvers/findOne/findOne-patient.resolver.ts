import { ResponsePatientOutput } from '../../dtos/reponsePatientOutput';
import { FindOnePatientService } from '../../usecases/findOne/findOne-patitient.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class FindOnePatientResolver {
  constructor(private readonly patientService: FindOnePatientService) {}

  @Query(() => ResponsePatientOutput)
  async FindOnePatient(@Args('id') id: string) {
    return await this.patientService.findOne(id);
  }
}
