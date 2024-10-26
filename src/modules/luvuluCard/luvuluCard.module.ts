import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ILuvuluCardRepository } from './repository/interface/ILuvuluCardRepository';
import { PrismaLuvulucardRepositoy } from './repository/implementations/prismaLuvuluCardRepository';
import { CreateLuvuluCardResolver } from './resolvers/create/create-luvulu-card.resolver';
import { CreateLuvuluCardService } from './usecases/create/create-luvulu-card.service';
import { ListAllLuvuluCardService } from './usecases/listAll/listaAll-luvulu-card..service';
import { ListOneLuvuluCardService } from './usecases/listOne/lista-one-luvulu-card.service';
import { FindAllLuvuluCardResolver } from './resolvers/listAll/listAll-luvulu-card.resolver';
import { FindOneLuvuluCardResolver } from './resolvers/listOne/listOne-luvulu-card.resolver';
import { CancelLuvuluCardRequestResolver } from './resolvers/acceptRequest/accept-status-luvulu-card.resolver';
import { ChangeStatusLuvuluCardService } from './usecases/changestatus/change-status-luvulu-card.service';
import { CancelLuvuluCardRequestService } from './usecases/cancelRequest/change-status-luvulu-card.service';
import { AcceptLuvuluCardRequestResolver } from './resolvers/cancelRequest/accept-status-luvulu-card.resolver';
import { PrismaNotificationsRepositoy } from '../notification/repository/implementations/prismaNotificationRepository';
import { INotificationRepository } from '../notification/repository/interface/INotificaionRepository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateLuvuluCardResolver,
    FindAllLuvuluCardResolver,
    FindOneLuvuluCardResolver,
    AcceptLuvuluCardRequestResolver,
    CancelLuvuluCardRequestResolver,

    CreateLuvuluCardService,
    ListOneLuvuluCardService,
    ListAllLuvuluCardService,
    ChangeStatusLuvuluCardService,
    CancelLuvuluCardRequestService,

    {
      provide: ILuvuluCardRepository,
      useClass: PrismaLuvulucardRepositoy,
    },
    {
      provide: INotificationRepository,
      useClass: PrismaNotificationsRepositoy,
    },
  ],

  exports: [],
})
export class LuvuluCardModule {}
