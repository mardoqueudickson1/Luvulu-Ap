import { Test, TestingModule } from '@nestjs/testing';
import { ListAllPatientService } from '../../usecases/listAll/listaAll-patitient.service';
import { ListAllPatientResolver } from './listAll-patient.resolver';

describe('PatientResolver', () => {
  let resolver: ListAllPatientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllPatientResolver, ListAllPatientService],
    }).compile();

    resolver = module.get<ListAllPatientResolver>(ListAllPatientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
