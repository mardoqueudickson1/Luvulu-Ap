import { Test, TestingModule } from '@nestjs/testing';
import { RemovePatientService } from '../../usecases/remove/remove-patitient.service';
import { RemovePatientResolver } from './remove-patient.resolver';

describe('PatientResolver', () => {
  let resolver: RemovePatientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemovePatientResolver, RemovePatientService],
    }).compile();

    resolver = module.get<RemovePatientResolver>(RemovePatientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
