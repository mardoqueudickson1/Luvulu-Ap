import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { updateConsultatinoType } from '../../dtos/update-consulationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { UpdateConsultationTypeService } from '../../usecases/update/update-consultationType.service';

@Resolver('consultation-type')
export class UpdateConsultationTypesResolver {
  constructor(private readonly typeCons: UpdateConsultationTypeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ConsultationTypes)
  async UpdateConsultationType(@Args('data') data: updateConsultatinoType) {
    return await this.typeCons.update(data.id, data);
  }
}
