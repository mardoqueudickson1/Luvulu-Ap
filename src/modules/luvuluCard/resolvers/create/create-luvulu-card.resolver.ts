import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateLuvuluCard } from '../../dtos/create-luvulu-card.input';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { CreateLuvuluCardService } from '../../usecases/create/create-luvulu-card.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { QrcodeResponse } from 'src/modules/qr-code/dtos/qrCode-rsponse';
@Resolver('luvulu-card')
export class CreateLuvuluCardResolver {
  constructor(private readonly repo: CreateLuvuluCardService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => LuvuluCard)
  async createLuvuluCard(
    @Args('data') data: CreateLuvuluCard,
    @CurrentUser() user: QrcodeResponse,
  ) {
    data.patientId = user.id;
    return await this.repo.create(data, user);
  }
}
