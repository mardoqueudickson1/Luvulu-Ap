import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateFCMService } from '../../usecases/create/create.service';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { fcmTokens } from '../../entities/fcm.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class CreateFMCResolver {
  constructor(private readonly repo: CreateFCMService) {}

  @Mutation(() => fcmTokens)
  @UseGuards(GqlAuthGuard)
  async createFCMToken(
    @Args('data') data: fcmTokenInput,
    @CurrentUser() user: any,
  ) {
    data.userId = user.id;
    return this.repo.create(data);
  }
}
