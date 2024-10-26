import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { FindMedicalHistoryByDoctorIdService } from '../../usecases/findByDoctorId/find-by-doctorId.service';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';

@Resolver()
export class FindMedicalHistoryByDoctoryIdResolver {
  constructor(
    private readonly medicalHistoryService: FindMedicalHistoryByDoctorIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => MedicalHistoryEntity)
  async findMedicalHistoryByDoctorId(
    @Args('id', { type: () => String }) id: string,
  ) {
    return await this.medicalHistoryService.execute(id);
  }
}
