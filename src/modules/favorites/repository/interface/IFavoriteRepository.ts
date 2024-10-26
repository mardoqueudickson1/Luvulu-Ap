import {
  CreateFavoriteInput,
  RemoveFavorite,
} from '../../dtos/create-favorite-input';
import { ResponseAllFavotites } from '../../dtos/favorite-response';
import { FavoriteType } from '../../dtos/favoriteType';
import { Favorite } from '../../entity/favorite.entity';

export abstract class IFavoriteRepository {
  abstract create(data: CreateFavoriteInput): Promise<Favorite>;
  abstract findAll(id: string): Promise<ResponseAllFavotites[]>;
  abstract remove(data: RemoveFavorite): Promise<{ message: string }>;
  abstract findUser(id: string): Promise<FavoriteType>;
}
