import { IFavoriteRepository } from '../../repository/interface/IFavoriteRepository';
import { CreateFavoriteInput } from '../../dtos/create-favorite-input';
import { Favorite } from '../../entity/favorite.entity';
import { IDoctorRepository } from 'src/modules/doctor/repository/interface/IDoctorRepository';
export declare class CreateFavoriteService {
    private repo;
    private userRepo;
    constructor(repo: IFavoriteRepository, userRepo: IDoctorRepository);
    create(data: CreateFavoriteInput): Promise<Favorite>;
}
