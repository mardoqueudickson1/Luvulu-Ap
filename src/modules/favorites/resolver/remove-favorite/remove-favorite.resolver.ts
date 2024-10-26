import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { RemoveFavorite } from '../../dtos/create-favorite-input';
import { Favorite } from '../../entity/favorite.entity';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { RemoveFavoriteService } from '../../usecases/remove-favorite/remove-favorite.service';

@Resolver('favorites')
export class RemoveFavoriteResolver {
  constructor(private readonly repo: RemoveFavoriteService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Favorite)
  async RemoveFavorite(
    @Args('data') input: RemoveFavorite,
    @CurrentUser() user: UserProfileResponse,
  ): Promise<{ message: string }> {
    input.pacientId = user.id;
    return await this.repo.remove(input);
  }
}
