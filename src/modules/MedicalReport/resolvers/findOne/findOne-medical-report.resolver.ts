import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { MedicalReportResponse } from '../../dtos/medical-report-response';
import { FindOneMedicalReportService } from '../../usecases/findOne/findOne-medical-report.service';

@Resolver()
export class FindOneMedicalReportResolver {
  constructor(private readonly repo: FindOneMedicalReportService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => MedicalReportResponse)
  async findOneMedicalReport(
    @Args('id') id: string,
  ): Promise<MedicalReportResponse> {
    return await this.repo.findOne(id);
  }
}
