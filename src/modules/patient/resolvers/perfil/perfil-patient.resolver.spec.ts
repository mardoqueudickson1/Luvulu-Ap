import { Test, TestingModule } from '@nestjs/testing';
import { ProfilePatientService } from '../../usecases/perfil/perfil-patitient.service';
import { ProfilePatientResolver } from './perfil-patient.resolver';

describe('ProfilePatientResolver', () => {
  let resolver: ProfilePatientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilePatientResolver, ProfilePatientService],
    }).compile();

    resolver = module.get<ProfilePatientResolver>(ProfilePatientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
