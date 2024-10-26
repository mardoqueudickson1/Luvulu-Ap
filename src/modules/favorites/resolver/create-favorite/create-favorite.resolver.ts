import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateFavoriteInput } from '../../dtos/create-favorite-input';
import { CreateFavoriteService } from '../../usecases/create-favorite/create-favorite.service';
import { Favorite } from '../../entity/favorite.entity';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';

@Resolver('favorites')
export class CreateFavoriteResolver {
  constructor(private readonly repo: CreateFavoriteService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Favorite)
  async createFavorites(
    @Args('data') input: CreateFavoriteInput,
    @CurrentUser() user: UserProfileResponse,
  ): Promise<Favorite> {
    input.pacientId = user.id;
    return await this.repo.create(input);
  }
}
