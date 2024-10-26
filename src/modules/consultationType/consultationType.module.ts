import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ConsultationTypeRepositoy } from './repository/implementations/prisma-ConsultationTypesRepository';
import { IConsultatioTypeRepository } from './repository/interface/IConsultatioTypeRepository';
import { CreateConsultationTypeResolver } from './resolvers/create/create-consultationType.resolver';
import { FindAllConsultationTypesResolver } from './resolvers/find-all/find-all-consultationType.resolver';
import { FindOneConsultationTypesResolver } from './resolvers/find-one/find-one-consultationType.resolver';
import { RemoveConsultationTypesResolver } from './resolvers/remove/remove-consultationType.resolver';
import { UpdateConsultationTypesResolver } from './resolvers/update/update-consultationType.resolver';
import { CreateConsulatationTypeService } from './usecases/create/create-consultatioType.service';
import { FindOndeConsultationTypeService } from './usecases/find-one/find-onde-consultationType.service';
import { ListAllConsultationTypeService } from './usecases/list-all/list-all-consultationType.service';
import { RemoveConsultationTypeService } from './usecases/remove/remove-consultationType.service';
import { UpdateConsultationTypeService } from './usecases/update/update-consultationType.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateConsulatationTypeService,
    FindOndeConsultationTypeService,
    ListAllConsultationTypeService,
    RemoveConsultationTypeService,
    UpdateConsultationTypeService,

    CreateConsultationTypeResolver,
    FindAllConsultationTypesResolver,
    FindOneConsultationTypesResolver,
    RemoveConsultationTypesResolver,
    UpdateConsultationTypesResolver,

    {
      provide: IConsultatioTypeRepository,
      useClass: ConsultationTypeRepositoy,
    },
  ],

  exports: [],
})
export class ConsultationTypeModule {}
