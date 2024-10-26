import { IFavoriteRepository } from '../../repository/interface/IFavoriteRepository';
export declare class FindAllFavoriteService {
    private repo;
    constructor(repo: IFavoriteRepository);
    findAll(id: string): Promise<import("../../dtos/favorite-response").ResponseAllFavotites[]>;
}
