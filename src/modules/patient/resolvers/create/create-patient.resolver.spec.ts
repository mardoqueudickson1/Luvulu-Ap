import { Test, TestingModule } from '@nestjs/testing';
import { CreatePatientResolver } from './create-patient.resolver';
import { CreatePatientService } from '../../usecases/create/create-patient.service';

describe('CreatePatientResolver', () => {
  let resolver: CreatePatientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePatientResolver, CreatePatientService],
    }).compile();

    resolver = module.get<CreatePatientResolver>(CreatePatientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
