import { CreateFavoriteInput } from '../../dtos/create-favorite-input';
import { CreateFavoriteService } from '../../usecases/create-favorite/create-favorite.service';
import { Favorite } from '../../entity/favorite.entity';
export declare class CreateFavoriteResolver {
    private readonly repo;
    constructor(repo: CreateFavoriteService);
    createFavorites(input: CreateFavoriteInput, user: any): Promise<Favorite>;
}
