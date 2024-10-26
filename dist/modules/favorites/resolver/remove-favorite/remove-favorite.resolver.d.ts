import { RemoveFavorite } from '../../dtos/create-favorite-input';
import { RemoveFavoriteService } from '../../usecases/remove-favorite/remove-favorite.service';
export declare class RemoveFavoriteResolver {
    private readonly repo;
    constructor(repo: RemoveFavoriteService);
    RemoveFavorite(input: RemoveFavorite, user: any): Promise<{
        message: string;
    }>;
}
