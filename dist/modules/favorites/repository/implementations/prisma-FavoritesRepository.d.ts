import { PrismaService } from 'nestjs-prisma';
import { CreateFavorite, RemoveFavorite } from '../../dtos/create-favorite-input';
import { Favorite } from '../../entity/favorite.entity';
import { IFavoriteRepository } from '../interface/IFavoriteRepository';
import { ResponseAllFavotites } from '../../dtos/favorite-response';
import { FavoriteType } from '../../dtos/favoriteType';
export declare class PrismaFavoriteRepositoy implements IFavoriteRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFavorite): Promise<Favorite>;
    remove(data: RemoveFavorite): Promise<{
        message: string;
    }>;
    findAll(id: string): Promise<ResponseAllFavotites[]>;
    findUser(id: string): Promise<FavoriteType>;
}
