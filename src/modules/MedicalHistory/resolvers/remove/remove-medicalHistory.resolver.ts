import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { RemoveHistoryMedicalService } from '../../usecases/remove/remove-historyMedical.service';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';

@Resolver('medicalhistory')
export class RemoveMedicalHistoryResolver {
  constructor(private readonly medicalService: RemoveHistoryMedicalService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => MedicalHistoryEntity)
  async removeMedicalHistory(@Args('id', { type: () => Int }) id: string) {
    return await this.medicalService.remove(id);
  }
}
