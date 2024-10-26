import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrismaClinicRatingRepositoy } from './repository/implementations/prisma-ClinicRatingRepository';
import { IClinicRatingRepository } from './repository/interface/IClinicRatingRepository';
import { CreateClinicRatingResolver } from './resolvers/create/create-clinic-rating.resolver';
import { FindAllClinicRatingResolver } from './resolvers/find-all/find-all-rating.resolver';
import { FindOneClinicRatedResolver } from './resolvers/find-one-rated/find-one-rated.resolver';
import { FindOneClinicRatingResolver } from './resolvers/find-one/find-one-rating.resolver';
import { RemoveClinicRatingResolver } from './resolvers/remove/remove-rating.resolver';
import { UpdateClinicRatingResolver } from './resolvers/update/update-rating.resolver';
import { CreateClinicRatingService } from './usecases/create/create-rating.service';
import { FindOneClinicRatedService } from './usecases/find-one-rated/find-one-rated.service';
import { FindOneClinicRatingService } from './usecases/find-one/find-onde-rating.service';
import { ListAllClinicRatingService } from './usecases/list-all/list-all-rating.service';
import { RemoveClinicRatingService } from './usecases/remove/remove-rating.service';
import { UpdateClinicRatingService } from './usecases/update/update-rating.service';
import { FindAllTopClinicRatedResolver } from './resolvers/list-all-top-rated/find-all-rating.resolver';
import { ListAllTopClinicRatingService } from './usecases/list-all -top-rated/list-all-top-rated.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateClinicRatingResolver,
    FindAllClinicRatingResolver,
    FindOneClinicRatingResolver,
    RemoveClinicRatingResolver,
    UpdateClinicRatingResolver,
    FindAllTopClinicRatedResolver,
    FindOneClinicRatedResolver,
    CreateClinicRatingService,
    FindOneClinicRatingService,
    ListAllClinicRatingService,
    RemoveClinicRatingService,
    UpdateClinicRatingService,
    ListAllTopClinicRatingService,
    FindOneClinicRatedService,

    {
      provide: IClinicRatingRepository,
      useClass: PrismaClinicRatingRepositoy,
    },
  ],

  exports: [],
})
export class ClinicRatingModule {}
