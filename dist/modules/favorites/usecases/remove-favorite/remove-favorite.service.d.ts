import { IFavoriteRepository } from '../../repository/interface/IFavoriteRepository';
import { RemoveFavorite } from '../../dtos/create-favorite-input';
export declare class RemoveFavoriteService {
    private repo;
    constructor(repo: IFavoriteRepository);
    remove(data: RemoveFavorite): Promise<{
        message: string;
    }>;
}
