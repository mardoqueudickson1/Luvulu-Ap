import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { CreateServicesClinicService } from './usecases/create/create-services-clinic.service';
import { RemoveServicesClinicService } from './usecases/remove/remove-services-clinic.service';
import { CreateServicesClinicResolver } from './resolvers/create/create-services-clinic.resolver';
import { RemoveServicesClinicResolver } from './resolvers/remove/remove-services-clinic.resolver';
import { IServicesClinicRepository } from './repository/interface/IServicesClinicRepository';
import { PrismaServicesClinicRepositoy } from './repository/implementations/prismaServicesClinicRepository';
import { IClinicRepository } from '../clinic/repository/interface/IClinicRepository';
import { PrismaClinicRepositoy } from '../clinic/repository/implementations/prismaClinicRepository';
import { ListAllServicesByClinicIdResolver } from './resolvers/listAll/listAll-services-ByclinicId.resolver';
import { ListAllServicesBydClinicIdClinicService } from './usecases/listAllByclinicId/listaAll-services-ByclinicId.service';
import { UpdateClinicServicesResolver } from './resolvers/update/update-clinicServices.resolver';
import { UpdateServicesClinicService } from './usecases/update/update-clinicService.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateServicesClinicService,
    RemoveServicesClinicService,
    ListAllServicesBydClinicIdClinicService,
    UpdateServicesClinicService,

    CreateServicesClinicResolver,
    RemoveServicesClinicResolver,
    ListAllServicesByClinicIdResolver,
    UpdateClinicServicesResolver,

    {
      provide: IServicesClinicRepository,
      useClass: PrismaServicesClinicRepositoy,
    },

    {
      provide: IClinicRepository,
      useClass: PrismaClinicRepositoy,
    },
  ],

  exports: [],
})
export class ServicesClinicModule {}
