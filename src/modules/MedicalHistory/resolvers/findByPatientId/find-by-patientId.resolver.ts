import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { FindMedicalHistoryByPatientIdService } from '../../usecases/getByPatientId/find-by-patientId.service';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';

@Resolver()
export class FindMedicalHistoryByPatientIdResolver {
  constructor(
    private readonly medicalHistoryService: FindMedicalHistoryByPatientIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [GetMedicalHsitoryByPatientIdOutput])
  async findOneMedicalHistory(@Args('id') id: string) {
    return await this.medicalHistoryService.execute(id);
  }
}
