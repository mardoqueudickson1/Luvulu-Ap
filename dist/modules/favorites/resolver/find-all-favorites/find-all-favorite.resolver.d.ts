import { ResponseAllFavotites } from '../../dtos/favorite-response';
import { FindAllFavoriteService } from '../../usecases/find-all-favorite/find-all-favorite.service';
export declare class FindAllFavoriteResolver {
    private readonly repo;
    constructor(repo: FindAllFavoriteService);
    findAllFavorites(user: any): Promise<ResponseAllFavotites[]>;
}
