import { Test, TestingModule } from '@nestjs/testing';
import { FindOnePatientResolver } from './findOne-patient.resolver';
import { RemovePatientService } from '../../usecases/remove/remove-patitient.service';

describe('FindOneFindOnePatientResolver', () => {
  let resolver: FindOnePatientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOnePatientResolver, RemovePatientService],
    }).compile();

    resolver = module.get<FindOnePatientResolver>(FindOnePatientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
