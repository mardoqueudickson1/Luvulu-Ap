import { Test, TestingModule } from '@nestjs/testing';
import { ListAllClinicService } from '../../usecases/listAll/listaAll-clinic.service';
import { ListAllClinicResolver } from './listAll-clinic.resolver';

describe('ListAllClinicResolver', () => {
  let resolver: ListAllClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllClinicResolver, ListAllClinicService],
    }).compile();

    resolver = module.get<ListAllClinicResolver>(ListAllClinicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
