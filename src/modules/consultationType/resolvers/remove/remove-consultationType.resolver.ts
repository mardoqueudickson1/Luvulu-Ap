import { Resolver, Args, Query } from '@nestjs/graphql';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { RemoveConsultationTypeService } from '../../usecases/remove/remove-consultationType.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class RemoveConsultationTypesResolver {
  constructor(private readonly typeConst: RemoveConsultationTypeService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ConsultationTypes)
  async RemoveConsultationType(@Args('id', { type: () => String }) id: string) {
    return await this.typeConst.remove(id);
  }
}
