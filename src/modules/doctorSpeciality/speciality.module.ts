import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaServicesClinicRepositoy } from './repository/implementations/prismaServicesClinicRepository';
import { ISpecialityRepository } from './repository/interface/IServicesClinicRepository';
import { CreateSpecialityResolver } from './resolvers/create/create-speciality.resolver';
import { CreateSpecialityService } from './usecases/create/create-services-clinic.service';
import { ListAllSpecialityService } from './usecases/listAll/listaAll-services-clinic.service';
import { FindAllSpecialityResolver } from './resolvers/listAll/listAll-speciality.resolver';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateSpecialityService,
    ListAllSpecialityService,

    CreateSpecialityResolver,
    FindAllSpecialityResolver,

    {
      provide: ISpecialityRepository,
      useClass: PrismaServicesClinicRepositoy,
    },
  ],

  exports: [],
})
export class specialiatyModule {}
