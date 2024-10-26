import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { ResponseAllFavotites } from '../../dtos/favorite-response';
import { FindAllFavoriteService } from '../../usecases/find-all-favorite/find-all-favorite.service';

@Resolver()
export class FindAllFavoriteResolver {
  constructor(private readonly repo: FindAllFavoriteService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllFavotites])
  async findAllFavorites(
    @CurrentUser() user: UserProfileResponse,
  ): Promise<ResponseAllFavotites[]> {
    return await this.repo.findAll(user.id);
  }
}
