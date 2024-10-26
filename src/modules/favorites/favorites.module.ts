import { Module } from '@nestjs/common';
import { RemoveFavoriteResolver } from './resolver/remove-favorite/remove-favorite.resolver';
import { PrismaFavoriteRepositoy } from './repository/implementations/prisma-FavoritesRepository';
import { IFavoriteRepository } from './repository/interface/IFavoriteRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { CreateFavoriteService } from './usecases/create-favorite/create-favorite.service';
import { CreateFavoriteResolver } from './resolver/create-favorite/create-favorite.resolver';
import { PrismaDoctorRepositoy } from '../doctor/repository/implementations/prismaDoctorRepository';
import { IDoctorRepository } from '../doctor/repository/interface/IDoctorRepository';
import { DoctorModule } from '../doctor/doctor.module';
import { FindAllFavoriteService } from './usecases/find-all-favorite/find-all-favorite.service';
import { FindAllFavoriteResolver } from './resolver/find-all-favorites/find-all-favorite.resolver';
import { RemoveFavoriteService } from './usecases/remove-favorite/remove-favorite.service';

@Module({
  imports: [PrismaModule, AuthModule, DoctorModule],

  providers: [
    CreateFavoriteResolver,
    FindAllFavoriteResolver,
    RemoveFavoriteResolver,

    CreateFavoriteService,
    FindAllFavoriteService,
    RemoveFavoriteService,

    {
      provide: IFavoriteRepository,
      useClass: PrismaFavoriteRepositoy,
    },

    {
      provide: IDoctorRepository,
      useClass: PrismaDoctorRepositoy,
    },
  ],
})
export class FavoritesModule {}
