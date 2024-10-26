import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { MedicalReports } from '../../entities/medical-report.entity';
import { CreateMedicalReportService } from '../../usecases/create/create-medical-report.service';
import { CreateMedicalReport } from '../../dtos/create-medical-report.input';

@Resolver('medical-report')
export class CreateMedicalReportResolver {
  constructor(private readonly repo: CreateMedicalReportService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => MedicalReports)
  async createMedicalReport(
    @Args('data') input: CreateMedicalReport,
    @CurrentUser() user: UserProfileResponse,
  ): Promise<MedicalReports> {
    input.doctorId = user.id;
    return await this.repo.create(input);
  }
}
