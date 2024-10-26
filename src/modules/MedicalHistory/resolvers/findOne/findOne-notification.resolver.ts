import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { FindOneMedicalHistoryService } from '../../usecases/findOne/findOne-medicalHistory.service';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';

@Resolver()
export class FindOneMedicalHistoryResolver {
  constructor(
    private readonly medicalHistoryService: FindOneMedicalHistoryService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => MedicalHistoryEntity)
  async findOneMedicalHistory(@Args('id', { type: () => String }) id: string) {
    return await this.medicalHistoryService.findOne(id);
  }
}
