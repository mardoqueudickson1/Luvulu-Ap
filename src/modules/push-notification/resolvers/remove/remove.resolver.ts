import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';
import { CreateFCMService } from '../../usecases/create/create.service';
import { fcmTokens } from '../../entities/fcm.entity';

@Resolver()
export class CreateFMCResolver {
  constructor(private readonly repo: CreateFCMService) {}

  @Mutation(() => fcmTokens)
  async removeFCMToken(
    @Args('data') data: fcmTokenInput,
    @CurrentUser() user: any,
  ) {
    data.userId = user.id;
    return this.repo.create(data);
  }
}
