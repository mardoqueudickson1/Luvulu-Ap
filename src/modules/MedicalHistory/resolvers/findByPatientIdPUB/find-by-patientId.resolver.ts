import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
import { FindMedicalHistoryByPatientIdPUBService } from '../../usecases/getByPatientIdPUB/find-by-patientId.service';

@Resolver()
export class FindMedicalHistoryByPatientIdPUBResolver {
  constructor(private readonly repo: FindMedicalHistoryByPatientIdPUBService) {}

  @Query(() => [GetMedicalHsitoryByPatientIdOutput])
  async findOneMedicalHistoryPUB(@Args('id') id: string) {
    return await this.repo.execute(id);
  }
}
