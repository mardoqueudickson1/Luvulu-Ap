import { Module } from '@nestjs/common';
import { PrismaRatingRepositoy } from './repository/implementations/prisma-DoctorRatingRepository';
import { IRatingRepository } from './repository/interface/IDoctorRatingRepository';
import { CreateRatingResolver } from './resolvers/create/create-rating.resolver';
import { FindAllRatingResolver } from './resolvers/find-all/find-all-rating.resolver';
import { FindOneRatingResolver } from './resolvers/find-one/find-one-rating.resolver';
import { RemoveRatingResolver } from './resolvers/remove/remove-rating.resolver';
import { UpdateRatingResolver } from './resolvers/update/update-rating.resolver';
import { CreateRatingService } from './usecases/create/create-rating.service';
import { FindOneRatingService } from './usecases/find-one/find-onde-rating.service';
import { ListAllRatingService } from './usecases/list-all/list-all-rating.service';
import { RemoveRatingService } from './usecases/remove/remove-rating.service';
import { UpdateRatingService } from './usecases/update/update-rating.service';
import { FindAllTopRatedngResolver } from './resolvers/list-all-top-rated/find-all-rating.resolver';
import { ListAllTopRatingService } from './usecases/list-all -top-rated/list-all-top-rated.service';
import { FindOneRatedResolver } from './resolvers/find-one-rated/find-one-rated.resolver';
import { FindOneRatedService } from './usecases/find-one-rated/find-one-rated.service';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateRatingResolver,
    FindAllRatingResolver,
    FindOneRatingResolver,
    RemoveRatingResolver,
    UpdateRatingResolver,
    FindAllTopRatedngResolver,
    FindOneRatedResolver,

    CreateRatingService,
    FindOneRatingService,
    ListAllRatingService,
    RemoveRatingService,
    UpdateRatingService,
    ListAllTopRatingService,
    FindOneRatedService,

    {
      provide: IRatingRepository,
      useClass: PrismaRatingRepositoy,
    },
  ],

  exports: [],
})
export class DoctorRatingModule {}
