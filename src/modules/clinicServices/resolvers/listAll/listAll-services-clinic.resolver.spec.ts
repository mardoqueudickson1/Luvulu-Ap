import { Test, TestingModule } from '@nestjs/testing';
import { ListAllServicesClinicResolver } from './listAll-services-clinic.resolver';
import { ListAllServicesClinicService } from '../../usecases/listAllByclinicId/listaAll-services-clinic.service';

describe('ListAllServicesClinicResolver', () => {
  let resolver: ListAllServicesClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllServicesClinicResolver, ListAllServicesClinicService],
    }).compile();

    resolver = module.get<ListAllServicesClinicResolver>(
      ListAllServicesClinicResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
